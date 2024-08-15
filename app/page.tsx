import Image from "next/image";
import Script from "next/script";
import {Button} from "@/components/ui/button";
import PreregisterPage from "@/components/home/preregister-page";
import ProjectDetailsPage from "@/components/home/project-details-page";

export default function Home() {
  return (
    <div className={"w-[100vw] h-[100vh]"}>
      <div className={"w-[100vw] h-[100vh] absolute z-0 pointer-events-none"}>
        <canvas id={"fluid-sim"} className={"w-full h-full"}/>
      </div>

      <div className={"w-full h-full absolute top-0 left-0 z-0"}>
        <PreregisterPage />
      </div>

      <div className={"w-full h-full absolute top-[100vh] left-0 z-0"}>
        <ProjectDetailsPage />
      </div>
    </div>
  );
}
