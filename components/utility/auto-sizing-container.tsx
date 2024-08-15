"use client";

import React, { useEffect, useRef, useState } from "react";

const AutoSizingContainer = (
  {
    children,
    className
  } : { children: React.ReactNode[]; className?: string },
) => {
  const containerRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let maxWidth = 0;
      let maxHeight = 0;

      // Loop through each child and measure its dimensions
      Array.from(container.children).forEach((child) => {
        // @ts-ignore
        const { offsetWidth, offsetHeight } = child;
        maxWidth = Math.max(maxWidth, offsetWidth);
        maxHeight = Math.max(maxHeight, offsetHeight);
      });

      // Set the container's size based on the largest child
      setDimensions({ width: maxWidth, height: maxHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      className={className}
    >
      {...children}
    </div>
  );
};

export default AutoSizingContainer;
