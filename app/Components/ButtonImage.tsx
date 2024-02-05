import Image from "next/image";
import React from "react";

// Inside ButtonImage.tsx
interface ButtonImageProps {
  type: string;
  onclick: () => void;
  isActive: boolean; // Add this line
}

export default function ButtonImage({
  type,
  onclick,
  isActive,
}: ButtonImageProps) {
  const activeClass = isActive ? "ring-2 ring-offset-2 ring-blue-500" : ""; // Example active class
  return (
    <button
      className={`border rounded-full p-1 ${activeClass}`}
      onClick={onclick}
    >
      <Image src={`/type_circle/${type}.png`} height={20} width={20} alt="" />
    </button>
  );
}
