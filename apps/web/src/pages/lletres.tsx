import { Practise } from "../sections/canva/Practise";
import { useLetters } from "../sections/canva/useData";

export default function Lletres() {
  const letters = useLetters();

  return <Practise data={letters} />;
}
