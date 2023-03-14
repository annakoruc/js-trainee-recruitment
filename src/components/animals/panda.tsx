import React from "react";
import { AnimalCard } from "@/components/AnimalCard";

export const Panda = () => {
  const text = (
    <h1>
      Eating always with <span>pleasure</span>
    </h1>
  );
  return <AnimalCard src="/img/panda.png" animal="panda" text={text} />;
};
