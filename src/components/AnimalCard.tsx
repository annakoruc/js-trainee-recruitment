import React from "react";
import Image from "next/image";

import styles from "../styles/componentsStyle/AnimalCard.module.css";
import { Heading } from "./Heading";

type CardProps = {
  animal: string;
  text: string | JSX.Element;
  src: string | HTMLImageElement;
  id: string;
};

export const AnimalCard = ({ animal, text, src, id }: CardProps) => {
  return (
    <div className={styles.card} id={id}>
      <main>
        <Heading as="h2">{animal.toUpperCase()}</Heading>
        {text}
      </main>
      <Image src={src} width={817} height={431} alt={animal} />
    </div>
  );
};
