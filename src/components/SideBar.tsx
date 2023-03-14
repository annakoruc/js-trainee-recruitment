import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { paths } from "../config/paths";

import styles from "../styles/componentsStyle/Sidebar.module.css";
import { Butterfly } from "./animals";

export const SideBar = () => {
  let router = useRouter();

  return (
    <nav className={styles.sidebar}>
      <p>Your new gang</p>
      <Link
        className={router.pathname === paths.bear ? "active_link" : ""}
        href="#Polar Bear"
      >
        Polar Bear
      </Link>
      <Link
        className={router.pathname == paths.cheetah ? "active_link" : ""}
        href="#cheetah"
      >
        Cheetah
      </Link>
      <Link
        className={router.pathname == paths.panda ? "active_link" : ""}
        href="#panda"
      >
        Panda
      </Link>
      <Link
        className={router.pathname == paths.fox ? "active_link" : ""}
        href="#fox"
      >
        Fox
      </Link>
      <Link
        className={router.pathname == paths.squirrel ? "active_link" : ""}
        href="#squirrel"
      >
        Squirrel
      </Link>
      <Link
        className={router.pathname == paths.butterfly ? "active_link" : ""}
        href="#butterfly"
      >
        Butterfly
      </Link>
      <Link
        className={router.pathname == paths.elephant ? "active_link" : ""}
        href="#elephant"
      >
        Elephant
      </Link>
    </nav>
  );
};
