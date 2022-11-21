import { Practise } from "../sections/canva/Practise";
import { useNumbers } from "../sections/canva/useData";

export default function Lletres() {
  const numbers = useNumbers();

  return <Practise data={numbers} />;
}
