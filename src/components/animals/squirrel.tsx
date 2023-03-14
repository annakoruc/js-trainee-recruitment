import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

export const Squirrel = () => {
  const text = (
    <h1>
      Staying <span>curious</span>
    </h1>
  );
  return <AnimalCard src="/img/squirrel.png" animal="squirrel" text={text} />;
};
