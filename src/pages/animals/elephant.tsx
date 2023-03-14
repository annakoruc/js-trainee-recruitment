import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

const Elephant = () => {
  const text = (
    <text>
      It makes a <span>huge</span> difference
    </text>
  );
  return <AnimalCard src="/img/elephant.png" animal="Elephant" text={text} />;
};

export default Elephant;
