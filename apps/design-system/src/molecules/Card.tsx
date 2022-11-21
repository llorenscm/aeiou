import Image from "next/image";
import Link from "next/link";

import { classNames } from "../shared/classNames";

import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  image: string;
  href: string;
  alt: string;
}
export const Card = ({ title, image, href, alt }: CardProps) => {
  return (
    <Link href={href}>
      <a>
        <section className={classNames(styles.card)}>
          <Image src={image} alt={alt} width={500} height={500} />
          <h2 className={classNames(styles.card__title)}>{title}</h2>
        </section>
      </a>
    </Link>
  );
};
