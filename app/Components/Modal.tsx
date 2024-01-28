import Image from "next/image";
import React from "react";

interface modalProps {
  monster: {
    monsterName: string;
    monsterID: number;
    elementType: string[];
    description: string;
    partnerSkill: { description: string; name: string };
    workSuitability: string[];
  };
}

export default function Modal({ monster }: modalProps) {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal overflow-y-auto">
        <div className="bg-base-200 rounded-xl relative sm:p-8 my-5">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn sm:btn-lg btn-lg btn-circle btn-ghost absolute right-0 top-0 ">
              ✕
            </button>
          </form>
          <div className="content sm:flex w-[400px] lg:w-auto">
            <div className="main-details lg:mr-5 md:mr-5  flex justify-center flex-col">
              <div className=" flex justify-center">
                <Image
                  src={`/pals/${monster.monsterName}.webp`}
                  width={300}
                  height={300}
                  alt=""
                  className="mb-4"
                />
              </div>

              <span className=" text-2xl font-bold text-center flex justify-center">
                {monster?.monsterName}
              </span>

              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Number:</td>
                      <td>
                        <span className="border rounded-full p-1">
                          {monster.monsterID}
                        </span>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Element Type:</td>
                      <td>
                        {Array.isArray(monster.elementType) ? (
                          monster.elementType.map((elementType, index) => (
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
                            src={`/type/${monster.elementType}.png`}
                            height={80}
                            width={80}
                            alt={monster.elementType}
                            className="flex justify-center"
                          />
                        )}
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Work Suitability</td>
                      <td className="flex flex-col gap-2">
                        {monster.workSuitability ? (
                          Object.entries(monster.workSuitability).map(
                            ([workType, level], index) => (
                              <div key={index} className="flex gap-2">
                                <span>Lvl {level}</span>
                                <Image
                                  src={`/work/${workType}.png`}
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
                  </tbody>
                </table>
              </div>
            </div>
            <div className="info overflow-y-auto flex flex-col items-center">
              <div className="description sm:w-[500px] mb-5 text-center">
                <p className="font-bold">{monster.description}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {/* row 1 */}
                    <tr className="flex">
                      <td className=" font-bold">PARTNER SKILL</td>
                      <td>
                        <span className="font-bold mb-1">
                          {monster.partnerSkill?.name}:
                        </span>
                        <p className=" max-w-96 text-xs">
                          {monster.partnerSkill?.description}
                        </p>
                      </td>
                    </tr>
                    <tr className="flex">
                      <td className="font-bold">ACTIVE SKILL</td>
                      <td className="flex flex-col gap-5">
                        {monster.activeSkills?.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between">
                              <span className="font-bold mb-1">
                                {skill.name}
                              </span>
                              <div className="font-bold mb-1">
                                <span>CD: {skill.cooldownTime}</span>
                              </div>
                              <div>
                                <Image
                                  src={`/type/${skill.type.trim()}.png`}
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
