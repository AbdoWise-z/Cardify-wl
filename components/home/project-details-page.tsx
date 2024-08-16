"use client";

import React from 'react';
import Link from "next/link";

const ProjectDetailsPage = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-y">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1
              className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Elevate Your Learning with Cardify
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Unlock personalized insights and assessments to optimize your study routine and achieve academic
              success.
            </p>
            <div className="space-x-4 mt-6">
              <button
                onClick={() => {
                  document.getElementById("top")?.scrollIntoView(
                    {
                      behavior: "smooth"
                    }
                  );
                }}
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  document.getElementById("assessments")?.scrollIntoView(
                    {
                      behavior: "smooth"
                    }
                  );
                }}
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

              >
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 pb-4">
            <img
              src="/learning.png"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;