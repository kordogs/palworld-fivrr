"use client";
import React, { useState } from "react";
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

  const Monster = pals2;

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

      <div className="flex justify-center min-h-screen">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Monster.map((monster, index) => (
            <Card
              onClick={() =>
                setSelectedMonster({
                  ...monster,
                  elementType: Array.isArray(monster.elementType)
                    ? monster.elementType
                    : [monster.elementType],
                  activeSkills: (monster.activeSkills || []).map((skill) => ({
                    ...skill,
                    cooldownTime:
                      "cooldownTime" in skill
                        ? skill.cooldownTime
                        : skill.cooldown,
                  })),
                  partnerSkill: monster.partnerSkill ?? {
                    name: "",
                    description: "",
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
