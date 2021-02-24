import { useState, useEffect } from "react";
import { useChallengesContext } from "../../context/ChallengesContext";

import * as S from "./styles";

let countDownTimeOut: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge } = useChallengesContext();

  const [time, setTime] = useState(0.05 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountDown() {
    setActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut);
    setActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (active && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time === 0) {
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [active, time]);

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
