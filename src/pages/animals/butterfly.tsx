import { AnimalCard } from "@/components/AnimalCard";
import React from "react";

const Butterfly = () => {
  const text = (
    <text>
      <span>Majestic</span> every time of a day
    </text>
  );

  return <AnimalCard src="/img/butterfly.png" animal="Butterfly" text={text} />;
};

export default Butterfly;
