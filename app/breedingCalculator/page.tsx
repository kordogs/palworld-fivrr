"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import pals from "../json/pals.json";
import ThemeController from "../Components/ThemeController";
import { motion } from "framer-motion";

const Monster = pals;

export default function BreedingCalculator() {
  const [parent1, setParent1] = useState("");
  const [parent2, setParent2] = useState("");
  const [result, setResult] = useState("");
  const [id, setId] = useState(""); // Add this line
  const [theme, setTheme] = useState("dark"); // or "dark" depending on your default theme

  const monsterNames = Monster.map((monster) => monster.monsterName).sort();

  useEffect(() => {
    let resultMonster = "";
    for (const monster of Monster) {
      if (
        monster.parent &&
        monster.parent.some(
          ([p1, p2]) =>
            (p1 === parent1 && p2 === parent2) ||
            (p1 === parent2 && p2 === parent1)
        )
      ) {
        resultMonster = monster.monsterName;
        break;
      }
    }
    console.log("Result Monster:", resultMonster); // Add this line
    setResult(resultMonster);
  }, [parent1, parent2]);

  useEffect(() => {
    let resultMonster = "";
    let resultId = ""; // And this line
    for (const monster of Monster) {
      if (
        monster.parent &&
        monster.parent.some(
          ([p1, p2]) =>
            (p1 === parent1 && p2 === parent2) ||
            (p1 === parent2 && p2 === parent1)
        )
      ) {
        resultMonster = monster.monsterName;
        resultId = monster.id ? monster.id.toString() : ""; // Updated line
        break;
      }
    }
    console.log("Result Monster:", resultMonster);
    setResult(resultMonster);
    setId(resultId); // And this line
  }, [parent1, parent2]);

  function getImageUrl(selectedName: string) {
    const monster = Monster.find(
      (monster) => monster.monsterName === selectedName
    );
    return monster ? monster.image : "";
  }

  return (
    <div
      className="flex justify-center pt-5 flex-col px-2"
      style={{
        backgroundImage:
          theme === "dark"
            ? `url(https://r4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-58568c5acfdc97f97ec049e292e9cbb0.jpg)`
            : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex justify-center flex-col items-center">
        <h1 className=" text-lg font-bold mb-2 from-green-500 to-orange-500">
          Breeding Parents
        </h1>
        <div className="flex justify-between gap-10 mb-2 px-5 py-7 rounded-lg bg-base-200">
          <div className="right flex flex-col">
            <h2 className="text-center font-bold text-sm mb-2">Parent 1</h2>
            <Image
              src={getImageUrl(parent1)}
              height={200}
              width={200}
              className=" mb-2"
              alt={""}
            />
            <span className="text-center">Number: {id}</span>
            <span className="text-center">Power: 100</span>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setParent1(e.target.value)}
            >
              <option disabled selected>
                Select Parent 1
              </option>
              {monsterNames.map((monster, index) => (
                <option key={index}>{monster}</option>
              ))}
            </select>
          </div>
          <div className="left flex flex-col">
            <h2 className="text-center font-bold text-sm mb-2">Parent 2</h2>
            <Image
              src={getImageUrl(parent2)}
              height={200}
              width={200}
              className=" mb-2"
              alt={""}
            />
            <span className="text-center">Number: {id}</span>
            <span className="text-center">Power: 100</span>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setParent2(e.target.value)}
            >
              <option disabled selected>
                Select Parent 2
              </option>
              {monsterNames.map((monster, index) => (
                <option key={index}>{monster}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center sm:hidden md:hidden">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height={100}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.25V18C13.25 18.3034 13.4327 18.5768 13.713 18.6929C13.9932 18.809 14.3158 18.7449 14.5303 18.5304L20.5303 12.5304C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L14.5303 5.46969C14.3158 5.25519 13.9932 5.19103 13.713 5.30711C13.4327 5.4232 13.25 5.69668 13.25 6.00002V11.25H4Z"
              fill="white"
            ></path>{" "}
          </g>
        </svg>
      </div> */}

      {/* egg result */}
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-lg font-bold mb-2 text-center">Egg Result</h1>
        <motion.div className="tilt flex justify-center flex-col border border-accent px-5 py-7 rounded-lg w-[250px] hover:shadow-lg transition-shadow duration-300 ease-in-out bg-glass bg-base-100 shadow-xl">
          <Image
            src={getImageUrl(result)}
            height={200}
            width={200}
            className=" mb-5 "
            alt={""}
          />
          <span className="text-center">Number: {id}</span>
          <span className="text-center">Power: 100</span>
          <span className=" text-lg font-bold text-center">{result}</span>
        </motion.div>
      </div>
      <ThemeController theme={theme} setTheme={setTheme} />
    </div>
  );
}
