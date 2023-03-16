import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

export const Fox = () => {
  const text = (
    <h1>
      Sometimes quite <span>suspicious</span>
    </h1>
  );
  return <AnimalCard src="/img/fox.png" animal="fox" id="fox" text={text} />;
};
