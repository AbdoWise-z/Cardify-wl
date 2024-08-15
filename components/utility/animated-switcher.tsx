"use client";

import React, {ReactNode, useEffect} from 'react';
import {cn} from "@/lib/utils";
import AutoSizingContainer from "@/components/utility/auto-sizing-container";

const AnimatedSwitcher = (
  {
    content,
    switchDur,
    className,
  } : {
    content: ReactNode[];
    switchDur: number[];
    className?: string;
  }
) => {
  const [position, setPosition] = React.useState(0);

  const goNext = () => {
    setPosition((position + 1) % content.length);
    //fixme: this is called twice at the same time for some reason ...
    //console.log("goNext called");
  }

  if (position >= content.length) {
    setPosition(position % content.length);
    return <p></p>;
  }

  setTimeout(goNext, switchDur[position]);



  return (
    <AutoSizingContainer className={className}>
      {content.map((child, index) => (
        <div key={index} className={
          cn(
            "transition-all absolute",
            position == index && "translate-x-0 translate-y-0 opacity-100",
            position > index  && "translate-x-0 translate-y-[100%] opacity-0",
            position < index  && "translate-x-0 translate-y-[-100%] opacity-0",
          )
        }>
          {child}
        </div>
      ))}
    </AutoSizingContainer>
  );
};

export default AnimatedSwitcher;