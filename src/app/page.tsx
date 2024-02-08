"use client";
import Choice from "./components/Choice";
import Header from "./components/Header";
import PlayAgain from "./components/PlayAgain";
import WaitingResult from "./components/WaitingResult";
import { useGame } from "./context";

export default function Home() {
  const { waitingForResult, playAgain, start } = useGame();
  return (
    <>
      <Header />
      {start && <Choice />}
      {!waitingForResult && playAgain && <Choice />}
      <WaitingResult />
      <PlayAgain />
    </>
  );
}
