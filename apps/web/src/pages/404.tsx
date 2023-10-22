import { Button } from "@aeiou/design-system/src/atoms/Button";
import { Icon } from "@aeiou/design-system/src/atoms/Icon";

import styles from "../styles/error404.module.scss";

export default function Custom404() {
  return (
    <div>
      <main className={styles.main}>
        <h1>No trobem la pàgina que busques</h1>
        <h3>Fes clic al botó inici per continuar utilitzant la nostra aplicació.</h3>
        <Button mode="secondary" href="/" size="xxl" label="home">
          <Icon icon="home" size="xl" />
        </Button>
      </main>
    </div>
  );
}
