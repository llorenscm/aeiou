import letters from "../../data/letters.json";
import numbers from "../../data/numbers.json";

export interface Data {
  text: string;
  imageSrc: string;
  icon?: string;
}

export function useLetters(): Data[] {
  return letters;
}
export function useNumbers(): Data[] {
  return numbers;
}
