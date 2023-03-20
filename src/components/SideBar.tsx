import useHeadings from "@/hooks/useHeadings";
import useScrollSpy from "@/hooks/useScrollSpy";

import styles from "../styles/componentsStyle/Sidebar.module.css";

export const SideBar = () => {
  const headings = useHeadings();
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    { rootMargin: "0% 0% -25% 0%" }
  );

  return (
    <nav className={styles.sidebar}>
      <p>Your new gang</p>
      <ul>
        {headings.map((val) => {
          return (
            <li
              key={val.id}
              className={activeId === val.id ? "active_link" : ""}
              onClick={() => {
                document
                  .getElementById(val.id)!
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {val.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
