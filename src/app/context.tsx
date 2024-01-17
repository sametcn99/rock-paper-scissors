"use client";
import { createContext, useContext, useState } from "react";
import React from "react";

const GameContext = createContext<{
  score: number;
  userChoice: string | null;
  computerChoice: string | null;
  result: string | null;
  waitingForResult: boolean;
  playAgain: boolean;
  start: boolean;
  handlePlayAgain: () => void;
  updateScore: (newScore: number) => void;
  playGame: (choice: string) => void;
  resetGame: () => void;
}>({
  score: 0,
  userChoice: null,
  computerChoice: null,
  result: null,
  waitingForResult: false,
  playAgain: false,
  start: false,
  handlePlayAgain: () => {},
  updateScore: () => {},
  playGame: () => {},
  resetGame: () => {},
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [waitingForResult, setWaitingForResult] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [start, setStart] = useState(true);

  // Add this function outside of the GameProvider component
  const getRandomChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  interface ChoiceWins {
    [key: string]: string;
  }

  const determineWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      return "Draw";
    }

    const wins: ChoiceWins = {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    };

    if (wins[userChoice] === computerChoice) {
      return "User";
    } else {
      return "Computer";
    }
  };

  // Inside the GameProvider component
  const playGame = (choice: string) => {
    console.log("Playing game with choice:", choice);
    setStart(false);
    const computerChoice = getRandomChoice();
    setWaitingForResult(true);
    setUserChoice(choice);
    setComputerChoice("");
    setPlayAgain(false);
    setTimeout(() => {
      setComputerChoice(computerChoice);
      const winner = determineWinner(choice, computerChoice);
      console.log("Computer chose:", computerChoice);
      console.log("Winner:", winner);
      if (winner === "User") {
        setScore(score + 1);
        setResult("Win!");
      } else if (winner === "Computer") {
        setScore(score - 1);
        setResult("Lose!");
      } else {
        setResult("draw");
      }
      setWaitingForResult(false);
    }, 2600);
  };

  const handlePlayAgain = () => {
    console.log("Handling play again");
    setResult("");
    setPlayAgain(true);
  };
  const updateScore = (newScore: number) => {
    console.log("Updating score to:", newScore);
    setScore(newScore);
  };

  const resetGame = () => {
    console.log("Resetting game");
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        userChoice,
        computerChoice,
        result,
        updateScore,
        playGame,
        resetGame,
        waitingForResult,
        playAgain,
        handlePlayAgain,
        start,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
