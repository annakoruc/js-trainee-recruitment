import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { paths } from "../config/paths";

import styles from "../styles/componentsStyle/Sidebar.module.css";

export const SideBar = () => {
  let router = useRouter();

  return (
    <nav className={styles.sidebar}>
      <p>Your new gang</p>
      <Link
        className={router.pathname === paths.bear ? "active_link" : ""}
        href={paths.bear}
      >
        Polar Bear
      </Link>
      <Link
        className={router.pathname == paths.cheetah ? "active_link" : ""}
        href={paths.cheetah}
      >
        Cheetah
      </Link>
      <Link
        className={router.pathname == paths.panda ? "active_link" : ""}
        href={paths.panda}
      >
        Panda
      </Link>
      <Link
        className={router.pathname == paths.fox ? "active_link" : ""}
        href={paths.fox}
      >
        Fox
      </Link>
      <Link
        className={router.pathname == paths.squirrel ? "active_link" : ""}
        href={paths.squirrel}
      >
        Squirrel
      </Link>
      <Link
        className={router.pathname == paths.butterfly ? "active_link" : ""}
        href={paths.butterfly}
      >
        Butterfly
      </Link>
      <Link
        className={router.pathname == paths.elephant ? "active_link" : ""}
        href={paths.elephant}
      >
        Elephant
      </Link>
    </nav>
  );
};
