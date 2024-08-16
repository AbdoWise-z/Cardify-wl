import * as React from 'react';

interface EmailTemplateProps {
  code: string;
}

export const EmailTemplate= ({
                               code,
                             } : EmailTemplateProps) => (
  <div className={"flex flex-col"}>
    <p>Hay there,</p>
    <p>thanks for pre-registering for Cardify, your verification code is: {code}</p>
    <br/>
    <p>Wish you best of luck, </p>
    <p>Cardify team.</p>

  </div>
);

export const MailComponent = (code: string) => {
  return <EmailTemplate code={code} />;
}
