import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

const Squirrel = () => {
  const text = (
    <text>
      staying <span>curious</span>
    </text>
  );
  return <AnimalCard src="/img/squirrel.png" animal="squirrel" text={text} />;
};

export default Squirrel;
