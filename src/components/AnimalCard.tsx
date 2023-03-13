import Image from "next/image";
import React from "react";

import styles from "../styles/componentsStyle/AnimalCard.module.css";

type CardProps = {
  animal: string;
  text: string;
  src: string | HTMLImageElement;
};

export const AnimalCard = ({ animal, text, src }: CardProps) => {
  return (
    <div className={styles.card}>
      <p>{animal}</p>
      <text>{text}</text>
      <Image src={src} width={817} height={431} alt={animal} />
    </div>
  );
};
