"use client";
import Image from "next/image";
import { useState } from "react";

const Monster = [
  {
    monsterName: "Anubis",
    image: "https://genshinlab.com/wp-content/uploads/2024/01/Anubis-1.webp",
    parent: [
      ["Penking", "Vanwyrm Cryst"],
      ["Penking", "Bushi"],
      ["Rushoar", "Blazamut"],
      ["Rushoar", "Suzaku Aqua"],
      ["Celaray", "Relaxaurus"],
      ["Celaray", "Relaxaurus Lux"],
      ["Celaray", "Mammorest Cryst"],
      ["Celaray", "Menasting"],
      ["Direhowl", "Paladius"],
      ["Direhowl", "Necromus"],
      ["Direhowl", "Frostallion Noct"],
      ["Direhowl", "Jetragon"],
      ["Mozzarina", "Pyrin Noct"],
      ["Mozzarina", "Beakon"],
      ["Mozzarina", "Ice Reptyro"],
      ["Mozzarina", "Lyleen"],
      ["Gobfin", "Suzaku"],
      ["Gobfin", "Shadowbeak"],
      ["Gobfin", "Necromus"],
      ["Gobfin Ignis", "Suzaku"],
      ["Gobfin Ignis", "Suzaku Aqua"],
      ["Gobfin Ignis", "Shadowbeak"],
      ["Mossanda", "Katress"],
      ["Mossanda", "Blazehowl"],
      ["Mossanda Lux", "Foxcicle"],
      ["Mossanda Lux", "Rayhound"],
      ["Mossanda Lux", "Tombat"],
      ["Caprity", "Beakon"],
      ["Caprity", "Ice Reptyro"],
      ["Caprity", "Grizzbolt"],
      ["Caprity", "Lyleen Noct"],
      ["Melpaca", "Pyrin Noct"],
      ["Melpaca", "Relaxaurus Lux"],
      ["Melpaca", "Menasting"],
      ["Melpaca", "Lyleen"],
      ["Eikthyrdeer", "Pyrin Noct"],
      ["Eikthyrdeer", "Beakon"],
      ["Eikthyrdeer", "Ice Reptyro"],
      ["Eikthyrdeer", "Lyleen Noct"],
      ["Eikthyrdeer Terra", "Pyrin Noct"],
      ["Eikthyrdeer Terra", "Ice Reptyro"],
      ["Eikthyrdeer Terra", "Menasting"],
      ["Eikthyrdeer Terra", "Lyleen"],
      ["Nitewing", "Rayhound"],
      ["Nitewing", "Blazehowl"],
      ["Incineram", "Surfent"],
      ["Incineram", "Surfent Terra"],
      ["Incineram", "Elphidran"],
      ["Incineram", "Anubis"],
      ["Incineram Noct", "Surfent"],
      ["Incineram Noct", "Surfent Terra"],
      ["Incineram Noct", "Anubis"],
      ["Cinnamoth", "Vanwyrm"],
      ["Cinnamoth", "Bushi"],
      ["Cinnamoth", "Blazehowl Noct"],
      ["Arsox", "Pyrin"],
      ["Arsox", "Warsect"],
      ["Arsox", "Quivern"],
      ["Arsox", "Faleris"],
      ["Dumud", "Pyrin Noct"],
      ["Dumud", "Menasting"],
      ["Dumud", "Lyleen"],
      ["Cawgnito", "Suzaku"],
      ["Cawgnito", "Shadowbeak"],
      ["Cawgnito", "Paladius"],
      ["Cawgnito", "Necromus"],
      ["Leezpunk", "Blazamut"],
      ["Leezpunk", "Suzaku Aqua"],
      ["Leezpunk Ignis", "Blazamut"],
      ["Loupmoon", "Helzephyr"],
      ["Loupmoon", "Grizzbolt"],
      ["Loupmoon", "Lyleen Noct"],
      ["Galeclaw", "Cryolinx"],
      ["Galeclaw", "Frostallion"],
      ["Galeclaw", "Frostallion Noct"],
      ["Robinquill", "Cryolinx"],
      ["Robinquill", "Orserk"],
      ["Robinquill", "Frostallion"],
      ["Robinquill Terra", "Cryolinx"],
      ["Robinquill Terra", "Astegon"],
      ["Robinquill Terra", "Orserk"],
      ["Gorirat", "Frostallion"],
      ["Gorirat", "Frostallion Noct"],
      ["Gorirat", "Jetragon"],
      ["Beegarde", "Shadowbeak"],
      ["Beegarde", "Paladius"],
      ["Beegarde", "Necromus"],
      ["Beegarde", "Jetragon"],
      ["Elizabee", "Chillet"],
      ["Elizabee", "Kitsun"],
      ["Elizabee", "Dinossom"],
      ["Elizabee", "Dinossom Lux"],
      ["Grintale", "Vanwyrm Cryst"],
      ["Grintale", "Bushi"],
      ["Sweepa", "Rayhound"],
      ["Sweepa", "Tombat"],
      ["Chillet", "Pyrin"],
      ["Chillet", "Warsect"],
      ["Chillet", "Quivern"],
      ["Univolt", "Sibelyx"],
      ["Univolt", "Kingpaca"],
      ["Univolt", "Wumpo"],
      ["Univolt", "Wumpo Botan"],
      ["Foxcicle", "Ragnahawk"],
      ["Foxcicle", "Faleris"],
      ["Pyrin", "Petallia"],
      ["Reindrix", "Relaxaurus"],
      ["Reindrix", "Relaxaurus Lux"],
      ["Reindrix", "Menasting"],
      ["Reindrix", "Lyleen"],
      ["Kitsun", "Reptyro"],
      ["Kitsun", "Mammorest"],
      ["Kitsun", "Jormuntide"],
      ["Kitsun", "Jormuntide Ignis"],
      ["Lunaris", "Suzaku"],
      ["Lunaris", "Suzaku Aqua"],
      ["Dinossom", "Reptyro"],
      ["Dinossom", "Warsect"],
      ["Dinossom", "Jormuntide"],
      ["Dinossom", "Jormuntide Ignis"],
      ["Dinossom Lux", "Reptyro"],
      ["Dinossom Lux", "Warsect"],
      ["Dinossom Lux", "Quivern"],
      ["Surfent", "Anubis"],
      ["Maraith", "Blazamut"],
      ["Digtoise", "Relaxaurus"],
      ["Digtoise", "Mammorest"],
      ["Digtoise", "Mammorest Cryst"],
      ["Digtoise", "Jormuntide"],
      ["Tombat", "Ragnahawk"],
      ["Lovander", "Beakon"],
      ["Lovander", "Helzephyr"],
      ["Lovander", "Grizzbolt"],
      ["Lovander", "Lyleen Noct"],
      ["Vanwyrm", "Azurobe"],
      ["Vanwyrm", "Kingpaca"],
      ["Vanwyrm", "Wumpo Botan"],
      ["Vanwyrm Cryst", "Elphidran"],
      ["Vanwyrm Cryst", "Elphidran Aqua"],
      ["Bushi", "Azurobe"],
      ["Ragnahawk", "Petallia"],
      ["Katress", "Sibelyx"],
      ["Katress", "Ice Kingpaca"],
      ["Katress", "Wumpo"],
      ["Verdash", "Astegon"],
      ["Verdash", "Orserk"],
      ["Vaelet", "Paladius"],
      ["Vaelet", "Frostallion Noct"],
      ["Vaelet", "Jetragon"],
      ["Sibelyx", "Blazehowl"],
      ["Cryolinx", "Felbat"],
      ["Blazehowl", "Ice Kingpaca"],
      ["Blazehowl Noct", "Kingpaca"],
      ["Blazehowl Noct", "Wumpo"],
      ["Blazehowl Noct", "Wumpo Botan"],
      ["Relaxaurus", "Broncherry"],
      ["Relaxaurus Lux", "Broncherry"],
      ["Broncherry", "Mammorest"],
      ["Broncherry", "Mammorest Cryst"],
      ["Broncherry Aqua", "Reptyro"],
      ["Broncherry Aqua", "Mammorest"],
      ["Broncherry Aqua", "Mammorest Cryst"],
      ["Broncherry Aqua", "Jormuntide"],
      ["Broncherry Aqua", "Jormuntide Ignis"],
      ["Petallia", "Quivern"],
      ["Petallia", "Faleris"],
      ["Fenglope", "Astegon"],
      ["Felbat", "Astegon"],
      ["Felbat", "Orserk"],
      ["Felbat", "Frostallion"],
      ["Anubis", "Anubis"],
    ],
  },
  {
    monsterName: "Lamball",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/palworld/1/10/T_SheepBall_icon_normal.png",
    parent: [
      ["Lamball", "Lamball"],
      ["Lamball", "Cattiva"],
      ["Cattiva", "Mau"],
      ["Chikipi", "Lifmunk"],
      ["Chikipi", "Mau Cryst"],
      ["Vixy", "Teafant"],
      ["Vixy", "Mau"],
      ["Teafant", "Cremis"],
      ["Teafant", "Mau Cryst"],
      ["Cremis", "Mau"],
    ],
  },
  {
    monsterName: "Cattiva",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/palworld/7/79/T_PinkCat_icon_normal.png?width=2240",
    parent: [
      ["Lamball", "Vixy"],
      ["Lamball", "Cremis"],
      ["Cattiva", "Cattiva"],
    ],
  },
  {
    monsterName: "Mau",
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/palworld/7/79/T_PinkCat_icon_normal.png?width=2240",
    parent: [
      ["Lamball", "Vixy"],
      ["Lamball", "Cremis"],
      ["Cattiva", "Cattiva"],
    ],
  },
];

export default function page() {
  const [selectedMonster, setSelectedMonster] = useState("Lamball");
  const [selectedParent, setSelectedParent] = useState("");
  const selectedMonsterObj = Monster.find(
    (monster) => monster.monsterName === selectedMonster
  );
  const findParent = (parentName: string) => {
    return Monster.find((monster) => monster.monsterName === parentName);
  };

  return (
    <div className="flex items-center flex-col pt-5">
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
      <div className="flex justify-between gap-10">
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
