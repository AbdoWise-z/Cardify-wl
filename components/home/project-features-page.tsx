import React from 'react';
import {CheckIcon, InfoIcon, LayoutDashboardIcon} from "lucide-react";

const ProjectFeaturesPage = () => {
  return (
    <section id="features" className="w-full py-6 md:py-12 lg:py-24">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Personalized Learning at Your Fingertips
            </h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {"Cardify's innovative features empower you to take control of your learning journey and achieve your academic goals."}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="grid gap-1">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <InfoIcon className="w-6 h-6 text-primary-foreground"/>
            </div>
            <h3 className="text-xl font-bold">Personalized Insights</h3>
            <p className="text-muted-foreground">
              Receive tailored insights into your learning patterns, strengths, and areas for improvement to
              optimize your study routine.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
              <CheckIcon className="w-6 h-6 text-secondary-foreground"/>
            </div>
            <h3 className="text-xl font-bold">Adaptive Assessments</h3>
            <p className="text-muted-foreground">
              Engage in personalized assessments that adapt to your progress, providing valuable feedback and
              recommendations.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="bg-muted rounded-md p-3 flex items-center justify-center">
              <LayoutDashboardIcon className="w-6 h-6 text-muted-foreground"/>
            </div>
            <h3 className="text-xl font-bold">Intuitive Dashboard</h3>
            <p className="text-muted-foreground">
              Access a user-friendly dashboard to track your progress, set goals, and stay organized throughout your
              learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeaturesPage;