import { Board } from "../sections/letters-board/Board";
import { useLetters } from "../sections/shared/useData";

export default function Lletres() {
  const letters = useLetters();

  return <Board data={letters} />;
}
