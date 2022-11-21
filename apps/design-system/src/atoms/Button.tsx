import Link from "next/link";
import React from "react";

import { classNames } from "../shared/classNames";

import { Icons } from "./Icon";

import styles from "./Button.module.scss";

export interface ButtonProps {
  children: string | JSX.Element;
  mode?: "primary" | "secondary" | "tertiary";
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  position?: "left" | "right";
  icon?: Icons;
  label?: string;
}

export const Button = ({ mode = "primary", position, isActive = false, label, ...props }: ButtonProps) => {
  const componentProps = {
    className: classNames(styles.btn, styles[`btn--${mode}`], styles[`btn--${position}`], {
      [styles["btn--active"]]: isActive,
    }),
    "aria-label": label,
    ...props,
  };

  if (props.href) {
    return (
      <Link href={props.href}>
        <a {...componentProps}></a>
      </Link>
    );
  }

  return <button {...componentProps} />;
};
