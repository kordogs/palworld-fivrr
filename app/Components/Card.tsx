import React from "react";
import Image from "next/image";
import { CardProps } from "../interface/CardProps";

export default function Card({
  name,
  type,
  work,
  monsterID,
  workPower,
  description,
  parent,
  onClick,
}: CardProps) {
  return (
    <div
      className="card bg-base-100 border-base-200 h-fit shadow-lg hover:shadow-glow hover:cursor-pointer hover:animate-pulse w-fit bg-opacity-50 min-h-[400px] max-h-[400px] overflow-auto box-content"
      onClick={() =>
        (document.getElementById("my_modal_3") as HTMLDialogElement).showModal()
      }
    >
      <div className="card-body overflow-hidden" onClick={onClick}>
        <span className="absolute left-3 top-3">
          <div className="border rounded-full px-1 bg-base-300 bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            {monsterID}
          </div>
        </span>
        <span className="absolute right-3 top-3 flex gap-1">
          {type.map((elementType, index) => (
            <Image
              key={index}
              src={`/type/${elementType}.png`}
              height={80}
              width={80}
              alt={elementType}
              className="flex justify-center"
            />
          ))}
        </span>

        <div className="flex justify-center">
          <Image
            src={`/pals/${name}.webp`}
            height={200}
            width={200}
            alt=""
            className="mb-2 mt-2"
          />
        </div>

        <div className="flex gap-2 justify-center">
          <h2 className="card-title text-lg text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full  text-center px-2">
            {name}
          </h2>
        </div>

        <div className="flex justify-center gap-2">
          <div className="flex items-center gap-2">
            {work.map((workType, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={`/work/${workType
                    .charAt(0)
                    .toUpperCase()}${workType.slice(1)}.png`}
                  alt={workType}
                  width={20}
                  height={20}
                  className="border rounded-full"
                />
                <span>{workPower[index]}</span>
              </div>
            ))}
          </div>
        </div>

        <span className="text-xs text-center whitespace-normal">
          {description}
        </span>
      </div>
    </div>
  );
}
