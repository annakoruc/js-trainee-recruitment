import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

export const PolarBear = () => {
  const text = (
    <h1>
      Say hello to your new <span>friend</span>
    </h1>
  );

  return (
    <AnimalCard
      src="/img/polar-bear.png"
      animal="Polar Bear"
      id="bear"
      text={text}
    />
  );
};
