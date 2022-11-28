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
    <main className={styles.main}>
      <div className={styles.main__content}>
        <Card href="/lletres" title="lletres" image="/img/letter.png" alt="lletra a" />
        <Card href="/numeros" title="números" image="/img/number.png" alt="número u" />
      </div>
      <footer className={styles.footer}>
        <p>
          Created by{" "}
          <a href="https://github.com/llorenscm" target="blank" className={styles.footer__link}>
            Llorenç Comellas
          </a>{" "}
          and Clara Giménez
        </p>
      </footer>
    </main>
  );
};

export default Home;
