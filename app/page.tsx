"use client";
import React, { useMemo, useState } from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import ThemeController from "./Components/ThemeController";
import pals2 from "../app/json/pals-A.json";
import Modal from "./Components/Modal";
import { Monster } from "./interface/Monster";
import { SetStateAction } from "react";
import Sort from "./Components/Sort";
import ButtonImage from "./Components/ButtonImage";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // or "dark" depending on your default theme
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"id" | "name">("name");
  const [selectedElementType, setSelectedElementType] = useState<string | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkSuitability, setSelectedWorkSuitability] = useState<
    string | null
  >(null);

  const Monster = pals2;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

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
    if (selectedWorkSuitability) {
      sorted = sorted.sort((a, b) => {
        const suitabilityA =
          a.workSuitability[
            selectedWorkSuitability as keyof typeof a.workSuitability
          ] || 0;
        const suitabilityB =
          b.workSuitability[
            selectedWorkSuitability as keyof typeof b.workSuitability
          ] || 0;
        return suitabilityB - suitabilityA; // sort in descending order
      });
    }

    return sorted;
  }, [
    Monster,
    sortBy,
    sortOrder,
    selectedElementType,
    selectedWorkSuitability,
  ]);

  const filteredMonsters = useMemo(() => {
    if (!searchTerm) {
      return sortedMonsters;
    }

    return sortedMonsters.filter((monster) =>
      monster.monsterName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedMonsters, searchTerm]);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      // style={{
      //   backgroundImage:
      //     theme === "dark"
      //       ? `url(https://r4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-58568c5acfdc97f97ec049e292e9cbb0.jpg)`
      //       : "",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      // }}
      className="px-10 pb-10"
    >
      <div className="">
        <Navbar onSearch={handleSearch} />
      </div>

      <div className=" flex flex-col sm:flex-row mb-5 justify-between gap-3 items-end">
        <section>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <a
              href=""
              type="button"
              className="inline-flex gap-1 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                fill="white"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>monster-skull</title>{" "}
                  <path d="M20.624 5.42c-0.707-0.58-1.541-1.011-2.519-1.267-0.187-0.231-0.411-0.43-0.663-0.588-0.623-1.288-1.424-2.596-1.424-2.596s-0.8 1.307-1.423 2.595c-0.215 0.135-0.41 0.299-0.578 0.487-1.162 0.232-2.132 0.695-2.939 1.351-6.017-0.988-11.433 5.057-9.516 11.428 0.771 2.562 4.546 4.208 6.506 3.134-3.694 0.006-4.792-4.007-3.65-6.791 0.73-1.779 2.011-2.784 3.783-2.794-0.587 2.2-0.797 4.817-0.797 7.625h4.405c-0.105 0.75-0.151 1.563-0.157 2.413-0.102 0.919 0.559 4.765 0.559 4.765s1.887-3.121 2.23-4.136c0.384 1.498 1.424 4.285 1.424 4.285s1.030-2.76 1.418-4.263c0.362 1.037 2.222 4.114 2.222 4.114s0.682-3.963 0.554-4.805c-0.007-0.836-0.053-1.635-0.157-2.374h4.372c0-2.808-0.21-5.425-0.796-7.624 1.841-0.041 3.168 0.969 3.917 2.793 1.142 2.784 0.045 6.797-3.65 6.791 1.96 1.073 5.735-0.572 6.506-3.134 1.929-6.41-3.566-12.49-9.627-11.409zM11.99 11.264c0.555 0.59 1.343 1.012 2.444 1.201 0 0.002 0 0.003 0 0.005 0 0.839-0.68 1.519-1.519 1.519s-1.519-0.68-1.519-1.519c0-0.491 0.233-0.928 0.595-1.205zM20.553 12.469c-0 0.839-0.68 1.519-1.519 1.519s-1.519-0.68-1.519-1.519c0-0.019 0.001-0.038 0.001-0.057 1.026-0.222 1.759-0.663 2.274-1.26 0.11 0.063 0.212 0.14 0.302 0.228l0.001 0.003c0.001-0 0.001-0.001 0.002-0.001 0.283 0.276 0.459 0.661 0.459 1.087zM7.131 28.033c-0.737 2.75 3.066 3.588 3.758 1.007 0.278-1.038-0.252-6.577-0.252-6.577s-3.228 4.532-3.506 5.57zM20.954 22.463c0 0-0.529 5.539-0.252 6.577 0.692 2.581 4.495 1.743 3.758-1.007-0.278-1.038-3.506-5.57-3.506-5.57zM17.467 23.943c0 0-1.025 3.982-0.942 4.772 0.207 1.964 3.080 1.79 2.859-0.302-0.083-0.79-1.917-4.47-1.917-4.47zM12.318 28.413c-0.221 2.092 2.652 2.266 2.859 0.302 0.083-0.79-0.942-4.772-0.942-4.772s-1.834 3.68-1.917 4.47z"></path>{" "}
                </g>
              </svg>
              Pals
            </a>
            <a
              href="/parentSearch"
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                className="h-6"
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
                    d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M7 16V9M7 2.5V5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              Parent Search
            </a>
            <a
              href="/breedingCalculator"
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="h-6"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M0 0h48v48H0z" fill="none"></path>{" "}
                  <g id="Shopicon">
                    {" "}
                    <path d="M24,4C14.843,4,8,16.143,8,27c0,10.168,6.43,17,16,17s16-6.832,16-17C40,16.143,33.157,4,24,4z M24,8 c4.934,0,9.792,6.248,11.423,13.749L33,24.172l-3-3l-3,3l-3-3l-3,3l-3-3l-3,3l-2.423-2.423C14.208,14.248,19.066,8,24,8z M24,40 c-5.801,0-12-3.415-12-13c0-0.055,0.006-0.11,0.006-0.166L15,29.828l3-3l3,3l3-3l3,3l3-3l3,3l2.994-2.994 C35.994,26.89,36,26.945,36,27C36,36.585,29.801,40,24,40z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Breeding Calculator
            </a>
          </div>
        </section>

        <div className="flex justify-center flex-col items-center gap-2">
          <div className="flex">
            <button
              onClick={() => setSortBy("name")}
              className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 ${
                sortBy === "name" ? "ring-2 ring-offset-2 ring-blue-500" : ""
              }`}
            >
              Sort by Name
            </button>
            <button
              onClick={() => setSortBy("id")}
              className={`text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 ${
                sortBy === "id" ? "ring-2 ring-offset-2 ring-purple-500" : ""
              }`}
            >
              Sort by ID
            </button>
          </div>

          <div>
            <div className="element-type"></div>
          </div>
          <div className="type flex gap-2">
            <ButtonImage
              type="Dark"
              onclick={() => {
                setSelectedElementType("Dark");
              }}
              isActive={selectedElementType === "Dark"}
            />
            <ButtonImage
              type="Dragon"
              onclick={() => setSelectedElementType("Dragon")}
              isActive={selectedElementType === "Dragon"}
            />
            <ButtonImage
              type="Electric"
              onclick={() => setSelectedElementType("Electric")}
              isActive={selectedElementType === "Electric"}
            />
            <ButtonImage
              type="Fire"
              onclick={() => setSelectedElementType("Fire")}
              isActive={selectedElementType === "Fire"}
            />
            <ButtonImage
              type="Grass"
              onclick={() => setSelectedElementType("Grass")}
              isActive={selectedElementType === "Grass"}
            />
            <ButtonImage
              type="Ground"
              onclick={() => setSelectedElementType("Ground")}
              isActive={selectedElementType === "Ground"}
            />
            <ButtonImage
              type="Ice"
              onclick={() => setSelectedElementType("Ice")}
              isActive={selectedElementType === "Ice"}
            />
            <ButtonImage
              type="Neutral"
              onclick={() => setSelectedElementType("Neutral")}
              isActive={selectedElementType === "Neutral"}
            />
            <ButtonImage
              type="Water"
              onclick={() => setSelectedElementType("Water")}
              isActive={selectedElementType === "Water"}
            />
            <button
              className="border px-1 rounded-full flex justify-center items-center"
              onClick={() => {
                setSelectedElementType("");
              }}
            >
              <svg
                viewBox="0 0 48 48"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect
                    width="48"
                    height="48"
                    fill="red"
                    fill-opacity="0.01"
                  ></rect>{" "}
                  <path
                    d="M8 8L40 40"
                    stroke="red"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M8 40L40 8"
                    stroke="red"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          <div className="work flex gap-2">
            <ButtonImage
              type={"Kindling"}
              onclick={() => {
                setSelectedWorkSuitability("Kindling");
              }}
              isActive={selectedWorkSuitability === "Kindling"}
            />
            <ButtonImage
              type={"Watering"}
              onclick={() => {
                setSelectedWorkSuitability("Watering");
              }}
              isActive={selectedWorkSuitability === "Watering"}
            />
            <ButtonImage
              type={"Planting"}
              onclick={() => {
                setSelectedWorkSuitability("Planting");
              }}
              isActive={selectedWorkSuitability === "Planting"}
            />
            <ButtonImage
              type={"Electricity"}
              onclick={() => {
                setSelectedWorkSuitability("Electricity");
              }}
              isActive={selectedWorkSuitability === "Electricity"}
            />
            <ButtonImage
              type={"Gathering"}
              onclick={() => setSelectedWorkSuitability("Gathering")}
              isActive={selectedWorkSuitability === "Gathering"}
            />
            <ButtonImage
              type={"Lumbering"}
              onclick={() => setSelectedWorkSuitability("Lumbering")}
              isActive={selectedWorkSuitability === "Lumbering"}
            />
            <ButtonImage
              type={"Mining"}
              onclick={() => setSelectedWorkSuitability("Mining")}
              isActive={selectedWorkSuitability === "Mining"}
            />
            <ButtonImage
              type={"Medicine"}
              onclick={() => {
                setSelectedWorkSuitability("Medicine");
              }}
              isActive={selectedWorkSuitability === "Medicine"}
            />
            <ButtonImage
              type={"Cooling"}
              onclick={() => {
                setSelectedWorkSuitability("Cooling");
              }}
              isActive={selectedWorkSuitability === "Cooling"}
            />
            <ButtonImage
              type={"Transporting"}
              onclick={() => {
                setSelectedWorkSuitability("Transporting");
              }}
              isActive={selectedWorkSuitability === "Transporting"}
            />
            <ButtonImage
              type={"Farming"}
              onclick={() => {
                setSelectedWorkSuitability("Farming");
              }}
              isActive={selectedWorkSuitability === "Farming"}
            />
            <button
              className="border px-1 rounded-full flex justify-center items-center"
              onClick={() => {
                setSelectedWorkSuitability("");
              }}
            >
              <svg
                viewBox="0 0 48 48"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect
                    width="48"
                    height="48"
                    fill="red"
                    fill-opacity="0.01"
                  ></rect>{" "}
                  <path
                    d="M8 8L40 40"
                    stroke="red"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M8 40L40 8"
                    stroke="red"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>

        <section className="flex justify-center items-center">
          <form className="w-96">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Pals"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className=" text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm"
              >
                Search
              </button>
            </div>
          </form>
        </section>
      </div>

      <div className="flex justify-center min-h-screen">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredMonsters.map((monster, index) => (
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
                    ? monster.passiveSkills.map((skill) => skill.name)
                    : [],
                  partnerSkill: monster.partnerSkill ?? {
                    name: "",
                    description: "",
                  },
                  catchStrategyAndWeakness:
                    monster.catchStrategyAndWeakness ?? {
                      strategy: "",
                      weaknesses: "", // Provide a default empty string
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
                          combatTier: "N/A",
                          rideTier: "N/A",
                          baseTier: "N/A",
                        },
                  breeding: {
                    breedingCombos: monster.breeding?.combos ?? [],
                    recommendedCombos:
                      monster.breeding?.bestCombos?.map((combo) => ({
                        parent1: combo.parent1,
                        parent2: combo.parent2,
                        child: combo.child ?? "", // Assuming child might not be present in all combos, provide a default value
                      })) ?? [],
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
      {/* <ThemeController theme={theme} setTheme={setTheme} /> */}
    </div>
  );
}
