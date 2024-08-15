import {NextResponse} from "next/server";
import {db} from "@/lib/db";

function isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

export const POST = async (req: Request) => {
  try {
    const {email , code} = await req.json();

    if (!email || !email.length || !isValidEmail(email) || !code || code.length != 6){
      return new NextResponse("Invalid input", {status: 402});
    }

    try {
      const item = await db.account.update({
        where: {
          email: email,
          code: code,
        },
        data: {
          verified: true,
        }
      });

      console.log(item);

      return NextResponse.json({
        status: 200,
      });
    } catch (e) {
      return NextResponse.json({
        status: 302,
      });
    }

  } catch (error){
    console.log("POST [api/pre-register]" , error);
    return new NextResponse("Internal Error" , {status: 500, statusText: "Internal Server Error"});
  }
}