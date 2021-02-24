import { useChallengesContext } from "../../context/ChallengesContext";

import * as S from "./styles";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useChallengesContext();

  return (
    <S.Wrapper>
      {!!activeChallenge ? (
        <S.Active>
          <header>Ganhe {activeChallenge.amount} de xp</header>

          <S.ActiveContent>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </S.ActiveContent>

          <footer>
            <S.Button color="successful">Completei</S.Button>
            <S.Button color="failed" onClick={resetChallenge}>
              Falhei
            </S.Button>
          </footer>
        </S.Active>
      ) : (
        <S.NotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios
          </p>
        </S.NotActive>
      )}
    </S.Wrapper>
  );
}
