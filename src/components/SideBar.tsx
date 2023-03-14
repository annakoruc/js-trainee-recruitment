import Link from "next/link";
import React from "react";

import styles from "../styles/componentsStyle/Sidebar.module.css";

export const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <p>Your new gang</p>
      <Link href={"/animals/polar-bear"}>Polar Bear</Link>
      <Link href={"/animals/cheetah"}>Cheetah</Link>
      <Link href={"/animals/panda"}>Panda</Link>
      <Link href={"/animals/fox"}>Fox</Link>
      <Link href={"/animals/squirrel"}>Squirrel</Link>
      <Link href={"/animals/butterfly"}>Butterfly</Link>
      <Link href={"/animals/elephant"}>Elephant</Link>
    </nav>
  );
};
