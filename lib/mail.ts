import nodemailer from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";
import {render} from "@react-email/render";
import {MailComponent} from "@/components/mail/email-template";


declare global {
  var mailer: nodemailer.Transporter<SMTPTransport.SentMessageInfo> | undefined;
}

export const mail = globalThis.mailer || nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

if (process.env.NODE_ENV != "production") globalThis.mailer = mail;

export async function sendMailTo(email: string , code: string) {

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Account Verification Code',
    html: render(MailComponent(code)),
    text: `Your verification code is ${code}, Thank you for pre-registering.`
  };


  // Send the email
  mail.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
}


export function isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

export function generateRandomSixDigitString(): string {
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return randomNumber.toString();
}

export function hasSixtySecondsPassed(specificDateTime: Date): boolean {
  const currentTime = new Date();
  const differenceInMilliseconds = currentTime.getTime() - specificDateTime.getTime();
  const differenceInSeconds = differenceInMilliseconds / 1000;
  return differenceInSeconds >= 60;
}