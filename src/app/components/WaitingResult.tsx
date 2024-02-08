import Image from "next/image";
import React from "react";
import { useGame } from "../context";

export default function WaitingResult() {
  const { userChoice, computerChoice, result, start, playAgain } = useGame();
  if (!start && !playAgain)
    return (
      <section
        className={`flex ${result ? "" : "animate-bounce"} flex-row items-center justify-between gap-4`}
      >
        <div className="choice-button">
          <Image
            src={`/${userChoice?.toLowerCase()}.png`}
            alt={userChoice ? userChoice : ""}
            width={50}
            height={50}
          />
        </div>
        <div className="choice-button">
          {computerChoice && (
            <Image
              src={`/${computerChoice.toLowerCase()}.png`}
              alt={computerChoice}
              width={50}
              height={50}
            />
          )}
        </div>
      </section>
    );
}
