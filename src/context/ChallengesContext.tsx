import { createContext, useState, useContext } from "react";
import challenges from "../../challenges.json";

type Challenge = {
  type: "body" | "eye";
  description: string;
  amount: number;
};

type ChallengesContextData = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
};

type ChallengesProviderProps = {
  children: React.ReactNode;
};

const ChallengesContext = createContext({} as ChallengesContextData);

export default function ChallengesProvider({
  children,
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallegeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallegeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export function useChallengesContext() {
  return useContext(ChallengesContext);
}
