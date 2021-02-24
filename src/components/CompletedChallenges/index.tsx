import { useChallengesContext } from "../../context/ChallengesContext";
import * as S from "./styles";

export default function CompletedChallenges() {
  const { challengesCompleted } = useChallengesContext();
  return (
    <S.Wrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Wrapper>
  );
}
