import aeiou from "../../data/aeiou.json";

export interface Data {
  text: string;
  imageSrc?: string;
  icon?: string;
  slug?: string;
  paraules?: [];
  letters: [];
  numbers: [];
}

export function useLetters(): Data[] {
  const letters = aeiou[0]["letters"];

  return letters;
}
export function useNumbers(): Data[] {
  const numbers = aeiou[1]["numbers"];

  return numbers;
}

export function useWords(slug: string): Data[] {
  const wordsStartWithLetter = aeiou[0]["letters"].filter((obj) => {
    return obj.slug === slug;
  });

  const words = wordsStartWithLetter[0]["paraules"];

  return words;
}
