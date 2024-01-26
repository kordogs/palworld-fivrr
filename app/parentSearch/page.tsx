"use client";
import Image from "next/image";
import { useState } from "react";
import pals from "../json/pals.json";
import ThemeController from "../Components/ThemeController";

const Monster = pals;

export default function Page() {
  const [selectedMonster, setSelectedMonster] = useState("Lamball");
  const [selectedParent, setSelectedParent] = useState("");
  const selectedMonsterObj = Monster.find(
    (monster) => monster.monsterName === selectedMonster
  );
  const findParent = (parentName: string) => {
    return Monster.find((monster) => monster.monsterName === parentName);
  };

  return (
    <div className="flex items-center flex-col pt-5 px-2">
      {/* monster select div */}
      <div className="mb-5 border border-green-500 px-5 py-7 rounded-lg ">
        <h1 className=" text-lg font-bold mb-2 text-center ">
          Select Desired Child
        </h1>

        <div className="border border-green-500 mb-5 bg-base-200">
          <Image
            src={selectedMonsterObj ? selectedMonsterObj.image : ""}
            height={200}
            width={200}
            alt=""
          />
        </div>

        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedMonster} // Add this line
          onChange={(e) => setSelectedMonster(e.target.value)}
        >
          <option disabled>Select your monster</option>
          {Monster.sort((a, b) =>
            a.monsterName.localeCompare(b.monsterName)
          ).map((monster, index) => (
            <option key={index} value={monster.monsterName}>
              {monster.monsterName}
            </option>
          ))}
        </select>
      </div>

      {/* parent data div */}
      <div className="flex justify-between lg:gap-10 sm:gap-[10px]">
        <div className="right">
          <h1 className="text-lg font-bold mb-2 text-center">
            Find Both Parents
          </h1>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Parent 1</th>
                  <th>Parent 2</th>
                </tr>
              </thead>
              <tbody>
                {Monster.filter(
                  (monster) => monster.monsterName === selectedMonster
                ).map((monster, index) =>
                  monster.parent.map((parentRow, parentIndex) => (
                    <tr
                      key={`${index}-${parentIndex}`}
                      //   className="flex justify-start"
                    >
                      <td
                      //    className="flex gap-1"
                      >
                        {/* {findParent(parentRow[0])?.image && (
                          <Image
                            src={findParent(parentRow[0])?.image}
                            height={20}
                            width={20}
                            alt=""
                          />
                        )} */}
                        {parentRow[0]}
                      </td>
                      <td
                      //   className="flex gap-1"
                      >
                        {/* {findParent(parentRow[1])?.image && (
                          <Image
                            src={findParent(parentRow[1])?.image}
                            height={20}
                            width={20}
                            alt=""
                          />
                        )} */}
                        {parentRow[1]}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="left">
          <h1 className="text-lg font-bold mb-2 text-center">
            Find One Missing Parent
          </h1>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => setSelectedParent(e.target.value)}
          >
            <option disabled selected>
              Select First Parent
            </option>
            {Array.from(
              new Set(
                Monster.filter(
                  (monster) => monster.monsterName === selectedMonster
                )[0].parent.flat()
              )
            )
              .sort()
              .map((parent, parentIndex) => [
                <option key={`${parentIndex}-1`} value={parent}>
                  {parent}
                </option>,
              ])}
          </select>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Parent 2 Match</th>
                </tr>
              </thead>
              <tbody>
                {selectedMonsterObj &&
                  selectedMonsterObj.parent
                    .slice() // create a copy of the array
                    .sort((a, b) => a[0].localeCompare(b[0])) // sort the first element of each sub-array
                    .map((parentRow, parentIndex) =>
                      parentRow[0] === selectedParent ||
                      parentRow[1] === selectedParent ? (
                        <tr key={`${parentIndex}-1`}>
                          <td>
                            {parentRow[0] !== selectedParent
                              ? parentRow[0]
                              : parentRow[1]}
                          </td>
                        </tr>
                      ) : null
                    )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ThemeController />
    </div>
  );
}
