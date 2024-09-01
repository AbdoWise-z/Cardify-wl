
import React from 'react';
import AnimatedSwitcher from "@/components/utility/animated-switcher";
import {EmailInputForm} from "@/components/home/preregister/email-input-form";
import {db} from "@/lib/db";

const PreregisterPage = async () => {

  const preRegisterCount = (await db.account.count({
    where: {
    }
  }));

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <span className={"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] pointer-events-none"}>
        <p className={"inline-block text-yellow-500"}>Cardify</p>
      </span>
      <div className={"text-sm md:text-xl pointer-events-none items-center justify-center content-center"}>
        <div className={"inline-block"} style={{
          verticalAlign: "top",
        }}>
          <p className={" mr-1"}>{"Your ultimate application for "}</p>
        </div>
        <AnimatedSwitcher content={
          [
            <p key={0} className={"text-yellow-500"}>{" Evolving."}</p>,
            <p key={1} className={"text-cyan-400"}>{" Education."}</p>,
            <p key={1} className={"text-red-400"}>{" Learning."}</p>,
          ]
        } switchDur={[500 , 500 , 4000]} className={"inline-block"}/>
      </div>

      <EmailInputForm />

      <span className={"mt-2 text-zinc-400"}>Join the other <p className={"inline text-yellow-500"}>{10 > preRegisterCount ? 10 : preRegisterCount}</p> awesome people who have pre-registered! </span>
    </div>
  );
};

export default PreregisterPage;