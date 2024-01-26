"use client";
import Image from "next/image";
import { useState } from "react";
import pals from "../json/pals.json";

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
      <div className="mb-5">
        <h1 className=" text-lg font-bold mb-2 text-center">
          Select Desired Child
        </h1>

        <div className="border mb-5">
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

      <div className="fixed right-5 bottom-5">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="light" />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}
