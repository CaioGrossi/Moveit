import { useChallengesContext } from "../../context/ChallengesContext";

import * as S from "./styles";

export default function Profile() {
  const { level } = useChallengesContext();

  return (
    <S.Wrapper>
      <img src="https://github.com/CaioGrossi.png" alt="Caio Grossi" />
      <S.UserInfo>
        <strong>Caio Grossi</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </S.UserInfo>
    </S.Wrapper>
  );
}
