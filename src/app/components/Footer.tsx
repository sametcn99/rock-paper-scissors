import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Link
      href="https://www.sametcc.me/rock-paper-scissors"
      className="fixed bottom-5 flex gap-2 font-sans text-sm hover:underline"
      target="_blank"
    >
      <Image alt="github logo" src="/github.svg" width={20} height={20} />
      Source Code
    </Link>
  );
}
