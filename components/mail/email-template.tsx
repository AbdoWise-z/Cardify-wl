import * as React from 'react';

interface EmailTemplateProps {
  code: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                        code,
                                                                      }) => (
  <div className={"flex flex-col"}>
    <p>Hay there,</p>
    <p>thanks for pre-registering for {"\"Name Still In Progress XD\""}, your verification code is: {code}</p>
    <br/>
    <p>Wish you best of luck, </p>
    <p>{"\"Name Still In Progress XD\""} team</p>

  </div>
);
