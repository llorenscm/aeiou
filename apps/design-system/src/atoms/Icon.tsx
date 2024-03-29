import React from "react";

import * as icons from "../icons/icons";
import { classNames } from "../shared/classNames";

import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;
export interface IconProps {
  icon: Icons;
  size?: "xxl" | "xl";
}

export const Icon = ({ icon, size, ...props }: IconProps) => {
  return (
    <span className={classNames(styles["icon"], styles[`icon--${size}`])} {...props}>
      {icons[icon]()}
    </span>
  );
};
