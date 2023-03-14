import { AnimalCard } from "@/components/AnimalCard";
import React from "react";

const Cheetah = () => {
  const text = (
    <text>
      No petting before <span>eating</span>
    </text>
  );
  return <AnimalCard src="/img/cheetah.png" animal="cheetah" text={text} />;
};

export default Cheetah;
