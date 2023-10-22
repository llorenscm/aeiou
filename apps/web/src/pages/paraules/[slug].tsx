import { Practise } from "../../sections/canva/Practise";
import { useLetters, useWords } from "../../sections/shared/useData";

export default function Paraules({ wordData }: any) {
  return <Practise data={wordData} type="words" />;
}

export async function getStaticPaths() {
  const letters = useLetters();
  const paths = letters.map((letter) => {
    return {
      params: {
        slug: letter.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const wordData = useWords(params.slug);

  return {
    props: {
      wordData,
    },
  };
}
