import Image from "next/image";
import React from "react";
import { CardProps } from "../interface/CardProps";
import { Monster } from "../interface/Monster";

interface modalProps {
  monster: Monster | null;
}

export default function Modal({ monster }: modalProps) {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal overflow-y-auto">
        <div className="bg-base-200 rounded-xl relative sm:p-8 my-5 py-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn sm:btn-md btn-lg btn-circle btn-ghost absolute right-0 top-0 ">
              ✕
            </button>
          </form>
          <div className="content sm:flex w-[400px] lg:w-auto">
            <div className="main-details lg:mr-5 md:mr-5  flex justify-center flex-col">
              <div className=" flex justify-center">
                <Image
                  src={`/pals/${monster?.monsterName}.webp`}
                  width={300}
                  height={300}
                  alt=""
                  className="mb-4"
                />
              </div>

              <div className="flex justify-center">
                <span className=" text-lg text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full  text-center px-2">
                  {monster?.monsterName}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Number:</td>
                      <td>
                        <span className="border rounded-full p-1">
                          {monster?.monsterID}
                        </span>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Element Type:</td>
                      <td>
                        {Array.isArray(monster?.elementType) ? (
                          monster?.elementType.map((elementType, index) => (
                            <Image
                              key={index}
                              src={`/type/${elementType}.png`}
                              height={80}
                              width={80}
                              alt={elementType}
                              className="flex justify-center"
                            />
                          ))
                        ) : (
                          <Image
                            src={`/type/${monster?.elementType}.png`}
                            height={80}
                            width={80}
                            alt={""}
                            className="flex justify-center"
                          />
                        )}
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Work Suitability:</td>
                      <td className="flex flex-col gap-2">
                        {monster?.workSuitability ? (
                          Object.entries(monster.workSuitability).map(
                            ([workType, level], index) => (
                              <div key={index} className="flex gap-2">
                                <span>Lvl {level}</span>
                                <Image
                                  src={`/work/${workType
                                    .charAt(0)
                                    .toUpperCase()}${workType.slice(1)}.png`}
                                  height={20}
                                  width={20}
                                  alt=""
                                  className="border rounded-full"
                                />
                              </div>
                            )
                          )
                        ) : (
                          <p>No work suitability data available.</p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Drops:</td>
                      <td>
                        <div className="flex flex-col gap-1">
                          {monster?.materialAndItemDrops?.materialsDropped.map(
                            (material, index) => (
                              <div key={index} className="flex gap-1">
                                <Image
                                  src={`/drop/${material.trim()}.png`}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                                <div>{material}</div>
                              </div>
                            )
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="info overflow-y-auto flex flex-col items-center h-[600px]">
              <div className="description sm:w-[500px] text-center">
                <p className="font-bold">{monster?.description}</p>
              </div>
              <div className="divider"></div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {/* row 1 */}
                    <tr className="flex">
                      <td className=" font-bold">PARTNER SKILL</td>
                      <td>
                        <span className="font-bold mb-1">
                          {monster?.partnerSkill?.name}:
                        </span>
                        <p className=" max-w-96 text-xs">
                          {monster?.partnerSkill?.description}
                        </p>
                      </td>
                    </tr>
                    <tr className="flex">
                      <td className="font-bold">ACTIVE SKILL</td>
                      <td className="flex flex-col gap-5">
                        {monster?.activeSkills?.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between">
                              <span className="font-bold sm:text-sm">
                                {skill.name}
                              </span>
                              <span className="font-bold sm:text-sm">
                                Pwr: {skill.power}
                              </span>

                              <span className="font-bold sm:text-sm">
                                CD: {skill.cooldownTime}
                              </span>

                              <div>
                                <Image
                                  src={`/type/${skill.type?.trim()}.png`}
                                  height={70}
                                  width={70}
                                  alt={skill.type}
                                />
                              </div>
                            </div>
                            <p className="max-w-96 text-xs">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr className="flex">
                      <td className="font-bold">
                        CATCH STRATEGY
                        <br /> AND WEAKNESS
                      </td>
                      <td className="flex flex-col gap-5">
                        <div>
                          <div className="flex justify-between">
                            <span className="font-bold sm:text-sm">
                              Strategy
                            </span>
                          </div>
                          <p className="max-w-96 text-xs">
                            {monster?.catchStrategyAndWeakness?.strategy || ""}
                          </p>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <span className="font-bold sm:text-sm">
                              Weakness
                            </span>
                          </div>
                          <p className="max-w-96 text-xs">
                            {monster?.catchStrategyAndWeakness?.weaknesses ||
                              ""}
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr className="flex">
                      <td className="font-bold">BASE STATS</td>
                      <td className="flex gap-5">
                        <div className="flex justify-between">
                          <span className="font-bold sm:text-sm text-green-500">
                            HP: {monster?.baseStats?.HP}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold sm:text-sm text-red-500">
                            Hunger: {monster?.baseStats?.Hunger}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold sm:text-sm text-orange-500">
                            Attack: {monster?.baseStats?.Attack}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold sm:text-sm text-blue-500">
                            Defense: {monster?.baseStats?.Defense}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
