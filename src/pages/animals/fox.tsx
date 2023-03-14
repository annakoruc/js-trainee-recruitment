import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

const Fox = () => {
  const text = (
    <text>
      Sometimes quite <span>suspicious</span>
    </text>
  );
  return <AnimalCard src="/img/fox.png" animal="fox" text={text} />;
};

export default Fox;
