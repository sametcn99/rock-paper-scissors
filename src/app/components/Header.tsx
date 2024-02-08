"use client";
import React from "react";
import { motion } from "framer-motion";
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
export default function Header() {
  const { score } = useGame();
  return (
    <motion.div
      className="flex w-full select-none flex-row justify-between rounded-lg border-4 border-purple-heart-700 p-5 text-2xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col font-bold"
      >
        <motion.span variants={item}>Rock</motion.span>
        <motion.span variants={item}>Paper</motion.span>
        <motion.span variants={item}>Scissor</motion.span>
      </motion.h1>
      <div className="flex flex-col items-center justify-between rounded-lg bg-purple-heart-950 p-2">
        <span className="font-mono">SCORE</span>
        <span className="text-3xl font-bold">{score}</span>
      </div>
    </motion.div>
  );
}
