import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

const Elephant = () => {
  const text = (
    <h1>
      It makes a <span>huge</span> difference
    </h1>
  );
  return <AnimalCard src="/img/elephant.png" animal="Elephant" text={text} />;
};

export default Elephant;
