import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

export const Elephant = () => {
  const text = (
    <h1>
      It makes a <span>huge</span> difference
    </h1>
  );
  return <AnimalCard src="/img/elephant.png" animal="elephant" text={text} />;
};
