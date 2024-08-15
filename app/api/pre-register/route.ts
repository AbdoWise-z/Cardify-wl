import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import {Resend} from "resend";
import {EmailTemplate} from "@/components/mail/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

function generateRandomSixDigitString(): string {
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return randomNumber.toString();
}

function hasSixtySecondsPassed(specificDateTime: Date): boolean {
  const currentTime = new Date();
  const differenceInMilliseconds = currentTime.getTime() - specificDateTime.getTime();
  const differenceInSeconds = differenceInMilliseconds / 1000;
  return differenceInSeconds >= 60;
}


async function sendMailTo(email: string , code: string) {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Account Verification Code',
    react: EmailTemplate({ code: code }),
  });

  if (error){
    console.log("MailTo:" + JSON.stringify(error));
  }
  return !error;
}

export const POST = async (req: Request) => {
  try {
    const {email} = await req.json();

    if (!email || !email.length || !isValidEmail(email)){
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

      if (!exists){
        throw "Somehow account doesn't exist";
      }

      if (exists.verified){
        return NextResponse.json({
          status: 201,
          message: `Account already verified`,
        });
      } else {
        if (hasSixtySecondsPassed(exists.lastCodeTime)){
          //resend email.
          if (await sendMailTo(exists.email, exists.code)) {
            await db.account.update({
              where: {
                email: exists.email,
              },
              data: {
                lastCodeTime: new Date(),
              }
            })
          }
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


