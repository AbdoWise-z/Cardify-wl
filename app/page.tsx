import PreregisterPage from "@/components/home/preregister-page";
import ProjectDetailsPage from "@/components/home/project-details-page";
import ProjectFeaturesPage from "@/components/home/project-features-page";
import AssessmentsPage from "@/components/home/assessments-page";
import InsightsPage from "@/components/home/insights-page";
import ProjectTeam from "@/components/home/project-team";

export default function Home() {
  return (
    <div className={"w-[100vw] h-[100vh]"}>
      <div className={"w-[100vw] h-[100vh] absolute z-0 pointer-events-none"}>
        <canvas id={"fluid-sim"} className={"w-full h-full"}/>
      </div>

      <div className={"w-full h-full absolute top-0 left-0 z-0"}>
        <a id={"top"}/>
        <PreregisterPage />
      </div>

      <div className={"w-full absolute top-[100vh] left-0 z-0 overflow-auto"}>
        <main className={"flex-1"}>
          <ProjectDetailsPage />
          <ProjectFeaturesPage />
          <InsightsPage />
          <AssessmentsPage />
          <ProjectTeam />
        </main>
      </div>
    </div>
  );
}
