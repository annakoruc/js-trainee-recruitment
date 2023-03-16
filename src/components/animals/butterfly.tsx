import { AnimalCard } from "@/components/AnimalCard";
import React from "react";

export const Butterfly = () => {
  const text = (
    <h1>
      <span>Majestic</span> every time of a day
    </h1>
  );

  return (
    <AnimalCard
      src="/img/butterfly.png"
      animal="butterfly"
      id="butterfly"
      text={text}
    />
  );
};
