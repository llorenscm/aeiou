import { Practise } from "../sections/canva/Practise";
import { useLetters } from "../sections/shared/useData";

export default function Lletres() {
  const letters = useLetters();

  return <Practise data={letters} type="letters" />;
}
