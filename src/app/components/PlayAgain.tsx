import React from "react";

export default function PlayAgain({ handlePlayAgain }: any) {
  return (
    <button
      onClick={handlePlayAgain}
      className="w-fit rounded-lg bg-purple-heart-950 p-2 font-mono text-2xl uppercase"
    >
      Play Again
    </button>
  );
}
