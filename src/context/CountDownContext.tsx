import { createContext, useContext, useEffect, useState } from "react";
import { useChallengesContext } from "./ChallengesContext";

let countDownTimeOut: NodeJS.Timeout;

type CountdownContextData = {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  active: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
};

type CountdownProviderProps = {
  children: React.ReactNode;
};

const CountdownContext = createContext({} as CountdownContextData);

export default function CountdownProvider({
  children,
}: CountdownProviderProps) {
  const { startNewChallenge } = useChallengesContext();

  const [time, setTime] = useState(0.05 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeOut);
    setActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
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
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        active,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountDownContext() {
  return useContext(CountdownContext);
}
