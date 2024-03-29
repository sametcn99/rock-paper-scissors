"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGame } from "../context";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Choice() {
  const { playGame, start, waitingForResult, playAgain } = useGame();
  return (
    <motion.div
      className="flex w-full flex-row flex-wrap items-center justify-center gap-4 "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        variants={item}
        onClick={() => playGame("Rock")}
        className="choice-button"
      >
        <Image src="/rock.png" alt="Rock" width={50} height={50} />
      </motion.button>
      <motion.button
        variants={item}
        onClick={() => playGame("Paper")}
        className="choice-button"
      >
        <Image src="/paper.png" alt="Paper" width={50} height={50} />
      </motion.button>
      <motion.button
        variants={item}
        onClick={() => playGame("Scissors")}
        className="choice-button"
      >
        <Image src="/scissors.png" alt="Scissors" width={50} height={50} />
      </motion.button>
    </motion.div>
  );
}
