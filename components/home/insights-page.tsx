import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import LineChartComponent from "@/components/home/insights/line-chart-component";


const InsightsPage = () => {
  return (
    <section id="insights" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Personalized Insights</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock Your Full Potential
          </h2>
          <p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {"Cardify's advanced analytics provide you with personalized insights to help you identify your strengths, weaknesses, and areas for improvement."}
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Learning Patterns</CardTitle>
              <CardDescription>
                Understand your unique learning patterns and preferences to optimize your study routine.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LineChartComponent className="aspect-[9/4]"/>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};


export default InsightsPage;