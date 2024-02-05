import Image from "next/image";
import React from "react";

interface ButtonImageProps {
  type: String;
  onclick: () => void;
}

export default function ButtonImage({ type, onclick }: ButtonImageProps) {
  return (
    <button className="border rounded-full p-1" onClick={onclick}>
      <Image src={`/type_circle/${type}.png`} height={20} width={20} alt="" />
    </button>
  );
}
