import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { LogoNerdbord } from "../components/LogoNerdbord";

import {
  Butterfly,
  Cheetah,
  Elephant,
  Fox,
  Panda,
  PolarBear,
  Squirrel,
} from "../components/animals";

import styles from "../styles/index.module.css";

export default function Home() {
  return (
    // <>
    <div className={styles.wrapper}>
      {/* <LogoNerdbord />
        <h1 className={inter.className}>
          Recruitment task for Javascript Trainee
        </h1> */}
      <PolarBear />
      <Cheetah />
      <Panda />
      <Fox />
      <Squirrel />
      <Butterfly />
      <Elephant />
    </div>
    // </>
  );
}
