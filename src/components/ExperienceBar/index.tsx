import { useChallengesContext } from "../../context/ChallengesContext";

import * as S from "./styles";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallengesContext();

  const percenteToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.Wrapper>
      <span>0 xp</span>
      <div>
        <S.Bar style={{ width: `${percenteToNextLevel}%` }}></S.Bar>
        <S.CurrentExperience style={{ left: `${percenteToNextLevel}%` }}>
          {currentExperience} xp
        </S.CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.Wrapper>
  );
}
