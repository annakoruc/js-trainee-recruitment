import { AnimalCard } from "@/components/AnimalCard";
import React from "react";

const Cheetah = () => {
  const text = (
    <h1>
      No petting before <span>eating</span>
    </h1>
  );
  return <AnimalCard src="/img/cheetah.png" animal="cheetah" text={text} />;
};

export default Cheetah;
