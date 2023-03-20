import React from "react";
import { SideBar } from "./SideBar";

import styles from "../styles/componentsStyle/Layout.module.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      {children}
    </div>
  );
};
