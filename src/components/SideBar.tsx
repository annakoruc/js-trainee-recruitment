import Link from "next/link";
import React from "react";

import styles from "../styles/componentsStyle/Sidebar.module.css";

export const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <p className={styles.sidebar_title}>Your new gang</p>
      <Link className={styles.link} href={"/animals/polar-bear"}>
        Polar Bear
      </Link>
      <Link className={styles.link} href={"/animals/cheetah"}>
        Cheetah
      </Link>
      <Link className={styles.link} href={"/animals/panda"}>
        Panda
      </Link>
      <Link className={styles.link} href={"/animals/fox"}>
        Fox
      </Link>
      <Link className={styles.link} href={"/animals/squirrel"}>
        Squirrel
      </Link>
      <Link className={styles.link} href={"/animals/butterfly"}>
        Butterfly
      </Link>
      <Link className={styles.link} href={"/animals/elephant"}>
        Elephant
      </Link>
    </nav>
  );
};
