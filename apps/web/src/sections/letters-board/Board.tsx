import { Button } from "@aeiou/design-system/src/atoms/Button";
import { Icon } from "@aeiou/design-system/src/atoms/Icon";

import { Data } from "../shared/useData";

import styles from "./Board.module.scss";

export function Board({ data }: { data: Data[] }) {
  return (
    <main className={styles.main}>
      <Button mode="tertiary" href="/" position="left" label="home">
        <Icon icon="home" />
      </Button>
      {/* <h1 className={styles.main__title}>
        Fes clic a cada lletra per descobrir i traçar paraules que comencen per aquesta
      </h1> */}
      <section className={styles.board}>
        {data.map((data) => (
          <Button key={data.text} mode="tertiary" size="xl" href={`/paraules/${data.slug}`}>
            {data.text}
          </Button>
        ))}
      </section>
    </main>
  );
}
