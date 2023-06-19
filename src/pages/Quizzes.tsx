import { useQuery } from "@tanstack/react-query";
import Api from "../api/api";

export type Props = {
  amount: number; // 문제 갯수
  category: number; // 15번 Entertainment: Video Games
  difficulty: string; // 난이도 (easy / medium / hard)
  type: string; // 문제성격 (multiple / boolean)
};

export default function Quizzed(props: Props) {
  const { amount, category, difficulty, type } = props;

  const { data } = useQuery(["quizzes"], async () => {
    const { data } = await Api.get("quizzes", {
      params: {
        amount,
        category,
        difficulty,
        type,
      },
    });

    return {
      data,
    };
  });

  console.log("data", data);

  return (
    <>
      <div>index</div>
    </>
  );
}
