import { useChallengesContext } from "../../context/ChallengesContext";
import * as S from "./styles";

type CompletedeChallengesProps = {
  challengesCompleted: number;
};
export default function CompletedChallenges({
  challengesCompleted,
}: CompletedeChallengesProps) {
  return (
    <S.Wrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Wrapper>
  );
}
