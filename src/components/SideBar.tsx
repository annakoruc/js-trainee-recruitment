import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/componentsStyle/Sidebar.module.css";

const navList = [
  { name: "Polar Bear", id: "#bear" },
  { name: "cheetah", id: "#cheetah" },
  { name: "panda", id: "#panda" },
  { name: "fox", id: "#fox" },
  { name: "squirrel", id: "#squirrel" },
  { name: "butterfly", id: "#butterfly" },
  { name: "elephant", id: "#elephant" },
];

export const SideBar = () => {
  const [selectedLink, setSelectedLink] = useState("");
  let router = useRouter();

  return (
    <nav className={styles.sidebar}>
      <p>Your new gang</p>
      <ul>
        {navList.map((val, key) => {
          return (
            <li
              className={`row ${selectedLink === val.id ? "active_link" : ""}`}
              key={key}
              onClick={() => {
                setSelectedLink(val.id);

                document
                  .querySelector(val.id)!
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {val.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
