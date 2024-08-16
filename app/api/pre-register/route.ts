import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import {generateRandomSixDigitString, hasSixtySecondsPassed, isValidEmail, mail, sendMailTo} from "@/lib/mail";


export const POST = async (req: Request) => {
  try {
    const {email} = await req.json();

    if (!email || !email.length || !isValidEmail(email) || email.length > 100){
      return new NextResponse("Invalid input", {status: 402});
    }

    try {
      const item = await db.account.create({
        data: {
          email: email,
          code: generateRandomSixDigitString(),
        }
      });

      await sendMailTo(item.email, item.code);

      return NextResponse.json({
        status: 200,
      });

    } catch (e){
      const exists = await db.account.findUnique({
        where: {
          email: email,
        }
      });

      if (exists == null){
        throw "Somehow account doesn't exist";
      }

      if (exists.verified){
        return NextResponse.json({
          status: 201,
          message: `Account already verified`,
        });
      } else {
        if (hasSixtySecondsPassed(exists?.lastCodeTime)){
          //resend email.
          await sendMailTo(exists.email, exists.code)
          await db.account.update({
            where: {
              email: exists.email,
            },
            data: {
              lastCodeTime: new Date(),
            }
          })
        }

        return NextResponse.json({
          status: 200,
        });
      }
    }
  } catch (error){
    console.log("POST [api/pre-register]" , error);
    return new NextResponse("Internal Error" , {status: 500, statusText: "Internal Server Error"});
  }
}


