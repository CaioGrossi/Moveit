import { useChallengesContext } from "../../context/ChallengesContext";
import { useCountDownContext } from "../../context/CountDownContext";
import formatTime from "../../utils/formatTime";

import * as S from "./styles";

export default function Countdown() {
  const {
    minutes,
    seconds,
    active,
    hasFinished,
    startCountDown,
    resetCountDown,
  } = useCountDownContext();

  const [minuteLeft, minuteRight] = formatTime(minutes);
  const [secondLeft, secondRight] = formatTime(seconds);

  return (
    <div>
      <S.WrapperClock>
        <S.Time>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.Time>

        <span>:</span>

        <S.Time>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.Time>
      </S.WrapperClock>

      {hasFinished ? (
        <S.Button disabled>Ciclo encerrado</S.Button>
      ) : (
        <>
          {active ? (
            <S.ActiveButton onClick={resetCountDown}>
              Abandonar ciclo
            </S.ActiveButton>
          ) : (
            <S.Button onClick={startCountDown}>Iniciar ciclo</S.Button>
          )}
        </>
      )}
    </div>
  );
}
