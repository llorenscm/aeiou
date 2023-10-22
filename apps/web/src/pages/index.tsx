import type { NextPage } from "next";
import React from "react";

import { Card } from "@aeiou/design-system/src/molecules/Card";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }

  return (
    <div>
      <main className={styles.main}>
        <Card href="/lletres" title="lletres" image="/img/letter.png" alt="lletra a" />
        <Card href="/paraules" title="paraules" image="/img/word.png" alt="paraula sol" />
        <Card href="/numeros" title="números" image="/img/number.png" alt="número u" />
      </main>
    </div>
  );
};

export default Home;
