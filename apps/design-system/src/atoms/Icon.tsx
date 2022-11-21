import React from "react";

import * as icons from "../icons/icons";
import { classNames } from "../shared/classNames";

import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;
export interface IconProps {
  icon: Icons;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  return (
    <span className={classNames(styles["icon"])} {...props}>
      {icons[icon]()}
    </span>
  );
};
