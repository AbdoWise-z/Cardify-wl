"use client";

import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {CartesianGrid, Line, LineChart, XAxis} from "recharts";
import React from "react";

function LineChartComponent(props: any) {
  return (
    <div  {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", "Problems Solved": 20 },
            { month: "February", "Problems Solved": 40 },
            { month: "March", "Problems Solved": 12 },
            { month: "April", "Problems Solved": 33 },
            { month: "May", "Problems Solved": 55 },
            { month: "June", "Problems Solved": 50 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="Problems Solved" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>


      </ChartContainer>
    </div>
  )
}

export default LineChartComponent;