import * as icons from "@aeiou/design-system/src/icons/icons";

import aeiou from "../../data/aeiou.json";

export type Icons = keyof typeof icons;

export interface Data {
  text: string;
  imageSrc: string;
  slug?: string;
  icon: Icons;
  paraules?: [{ text: string; icon: string }];
}

export function useLetters(): Data[] {
  const letters = aeiou[0]["letters"];

  return letters as [];
}
export function useNumbers(): Data[] {
  const numbers = aeiou[1]["numbers"];

  return numbers as [];
}

export function useWords(slug: string): Data[] {
  const wordsStartWithLetter = aeiou[0]["letters"].filter((obj) => {
    return obj.slug === slug;
  });

  const words = wordsStartWithLetter[0]["paraules"];

  return words as [];
}
