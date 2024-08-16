import React from 'react';
import {Button} from "@/components/ui/button";

const AssessmentsPage = () => {
  return (
    <section id="assessments" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Adaptive Assessments</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored to Your Needs</h2>
            <p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {"Cardify's adaptive assessments adjust to your progress, providing personalized feedback and recommendations to help you excel."}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="/assesments.png"
            width="550"
            height="310"
            alt="Assessments"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Adaptive Difficulty</h3>
                  <p className="text-muted-foreground">
                    {"Assessments that adjust in complexity based on your performance, ensuring you're challenged at the right level."}
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Personalized Feedback</h3>
                  <p className="text-muted-foreground">
                    {"Receive detailed feedback and recommendations to help you identify and address your weaknesses."}
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-muted-foreground">
                    {"Monitor your progress over time and see how you're improving with each assessment."}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentsPage;