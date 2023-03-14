import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

const PolarBear = () => {
  const text = (
    <text>
      Say hello to your new <span>friend</span>
    </text>
  );

  return (
    <AnimalCard src="/img/polar-bear.png" animal="Polar Bear" text={text} />
  );
};

export default PolarBear;
