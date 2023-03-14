import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

const Panda = () => {
  const text = (
    <text>
      Eating always with <span>pleasure</span>
    </text>
  );
  return <AnimalCard src="/img/panda.png" animal="panda" text={text} />;
};

export default Panda;
