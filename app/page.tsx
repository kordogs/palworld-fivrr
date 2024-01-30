"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import ThemeController from "./Components/ThemeController";
import pals2 from "../app/json/pals-A.json";
import Modal from "./Components/Modal";
import { Monster } from "./interface/Monster";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // or "dark" depending on your default theme
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"id" | "name">("name");
  const [selectedElementType, setSelectedElementType] = useState<string | null>(
    null
  );

  const Monster = pals2;

  const sortedMonsters = useMemo(() => {
    let sorted = [...Monster];
    if (sortBy === "name") {
      sorted.sort((a, b) => a.monsterName.localeCompare(b.monsterName));
    } else {
      sorted.sort((a, b) => {
        const idA = parseInt(String(a.monsterID));
        const idB = parseInt(String(b.monsterID));
        if (isNaN(idA) || isNaN(idB)) {
          return 0; // or any other value that makes sense in your case
        }
        return idA - idB;
      });
    }
    if (sortOrder === "desc") {
      sorted.reverse();
    }
    if (selectedElementType) {
      sorted = sorted.filter((monster) =>
        Array.isArray(monster.elementType)
          ? monster.elementType.includes(selectedElementType)
          : monster.elementType === selectedElementType
      );
    }
    return sorted;
  }, [Monster, sortBy, sortOrder, selectedElementType]);

  return (
    <div
      style={{
        backgroundImage:
          theme === "dark"
            ? `url(https://r4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-58568c5acfdc97f97ec049e292e9cbb0.jpg)`
            : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="px-10"
    >
      <div className="mb-5">
        <Navbar />
      </div>

      <div className=" flex">
        <button
          onClick={() => setSortBy("name")}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("id")}
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
        >
          Sort by ID
        </button>
        <select
          className="select select-bordered w-fit max-w-xs select-xs h-7 "
          onChange={(e) => setSelectedElementType(e.target.value)}
        >
          <option disabled selected>
            Sort By Element Type
          </option>
          <option>Dark</option>
          <option>Dragon</option>
          <option>Electric</option>
          <option>Fire</option>
          <option>Grass</option>
          <option>Ground</option>
          <option>Ice</option>
          <option>Neutral</option>
          <option>Water</option>
        </select>
      </div>

      <div className="flex justify-center min-h-screen">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sortedMonsters.map((monster, index) => (
            <Card
              onClick={() =>
                setSelectedMonster({
                  ...monster,
                  baseStats: monster.baseStats ?? {
                    HP: 0,
                    Hunger: 0,
                    Attack: 0,
                    Defense: 0,
                  },
                  elementType: Array.isArray(monster.elementType)
                    ? monster.elementType
                    : [monster.elementType],
                  activeSkills: (monster.activeSkills || []).map((skill) => ({
                    ...skill,
                    cooldownTime:
                      "cooldownTime" in skill
                        ? skill.cooldownTime
                        : skill.cooldown,
                    description: skill.description || "",
                  })),
                  passiveSkills: Array.isArray(monster.passiveSkills)
                    ? monster.passiveSkills
                    : [],
                  partnerSkill: monster.partnerSkill ?? {
                    name: "",
                    description: "",
                  },
                  catchStrategyAndWeakness:
                    monster.catchStrategyAndWeakness ?? {
                      strategy: "",
                      weaknesses: "",
                    },
                  materialAndItemDrops: Array.isArray(
                    monster.materialAndItemDrops?.possibleDrops
                  )
                    ? monster.materialAndItemDrops
                    : {
                        materialsDropped: [],
                        possibleDrops: [
                          monster.materialAndItemDrops?.possibleDrops || "",
                        ],
                      },

                  tierListRanking:
                    typeof monster.tierListRanking === "string"
                      ? { combatTier: "", rideTier: "", baseTier: "" }
                      : monster.tierListRanking ?? {
                          combatTier: "",
                          rideTier: "",
                          baseTier: "",
                        },
                  breeding: monster.breeding ?? {
                    breedingCombos: [],
                    recommendedCombos: [],
                  },
                })
              }
              monsterID={monster.monsterID}
              key={index}
              name={monster.monsterName}
              type={
                Array.isArray(monster.elementType)
                  ? monster.elementType
                  : [monster.elementType]
              }
              work={
                monster.workSuitability
                  ? Object.keys(monster.workSuitability).map(String)
                  : []
              }
              workPower={
                monster.workSuitability
                  ? Object.values(monster.workSuitability).map((key) =>
                      Number(key)
                    )
                  : []
              }
              description={monster.description || ""}
              parent={[]}
              partnerSkill={[]}
              activeSkills={[]}
            />
          ))}
          <Modal monster={selectedMonster} />
        </main>
      </div>
      <ThemeController theme={theme} setTheme={setTheme} />
    </div>
  );
}
