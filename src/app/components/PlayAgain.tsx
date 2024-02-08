"use client";
import React from "react";
import { useGame } from "../context";

export default function PlayAgain() {
  const { handlePlayAgain, waitingForResult, playAgain, start } = useGame();
  if (!waitingForResult && !playAgain && !start)
    return (
      <button
        onClick={handlePlayAgain}
        className="w-fit rounded-lg bg-purple-heart-950 p-2 font-mono text-2xl uppercase"
      >
        Play Again
      </button>
    );
}
