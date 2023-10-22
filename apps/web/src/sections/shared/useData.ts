import aeiou from "../../data/aeiou.json";

export interface Data {
  text: string;
  imageSrc?: string;
  icon?: string;
  slug?: string;
  paraules?: [];
  letters?: [];
  numbers?: [];
}

export function useLetters(): any {
  const letters = aeiou[0]["letters"];

  return letters;
}
export function useNumbers(): any {
  const numbers = aeiou[1]["numbers"];

  return numbers;
}

export function useWords(slug: string): any {
  const wordsStartWithLetter = aeiou[0]["letters"].filter((obj) => {
    return obj.slug === slug;
  });

  const words = wordsStartWithLetter[0]["paraules"];

  return words;
}
