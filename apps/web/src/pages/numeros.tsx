import { Practise } from "../sections/canva/Practise";
import { useNumbers } from "../sections/shared/useData";

export default function Lletres() {
  const numbers = useNumbers();

  return <Practise data={numbers} type="numbers" />;
}
