"use client";
import Choice from "./components/Choice";
import Header from "./components/Header";
import PlayAgain from "./components/PlayAgain";
import WaitingResult from "./components/WaitingResult";
import { useGame } from "./context";

export default function Home() {
  const {
    score,
    userChoice,
    computerChoice,
    result,
    playGame,
    waitingForResult,
    handlePlayAgain,
    playAgain,
    start,
  } = useGame();

  const handleChoice = (choice: string) => {
    playGame(choice);
  };

  return (
    <section className="flex w-[30rem] flex-col items-center gap-14">
      <Header score={score} />
      {start && <Choice handleChoice={handleChoice} />}
      {!waitingForResult && playAgain && <Choice handleChoice={handleChoice} />}
      {!start && !playAgain && waitingForResult && (
        <WaitingResult
          userChoice={userChoice}
          result={result}
          computerChoice={computerChoice}
        />
      )}
      {!start && !playAgain && !waitingForResult && (
        <WaitingResult
          userChoice={userChoice}
          result={result}
          computerChoice={computerChoice}
        />
      )}
      {!waitingForResult && !playAgain && !start && (
        <PlayAgain handlePlayAgain={handlePlayAgain} />
      )}
    </section>
  );
}
