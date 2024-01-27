import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="card bg-base-100 border-base-200 h-fit shadow-lg hover:shadow-glow hover:cursor-pointer hover:animate-pulse w-fit bg-opacity-50">
      <div className="card-body">
        <span className="absolute right-3 top-3">
          <Image
            src={
              "https://oyster.ignimgs.com/mediawiki/apis.ign.com/palworld/4/40/Neutral%281%29.png?width=2240"
            }
            height={30}
            width={30}
            alt=""
            className="flex justify-center"
          />
        </span>

        <div className="flex justify-center">
          <Image
            src={
              "https://oyster.ignimgs.com/mediawiki/apis.ign.com/palworld/1/10/T_SheepBall_icon_normal.png"
            }
            height={200}
            width={200}
            alt=""
            className="mb-2"
          />
        </div>

        <div className="flex gap-2 justify-center">
          <h2 className="card-title text-lg">Lamball</h2>
        </div>

        <div className="flex justify-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={
                "https://img.game8.co/3824101/368533c5409763aed06ed53c738f6800.png/show"
              }
              height={20}
              width={20}
              alt=""
              className="border rounded-full"
            />
            <span>1</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={
                "https://img.game8.co/3824101/368533c5409763aed06ed53c738f6800.png/show"
              }
              height={20}
              width={20}
              alt=""
              className="border rounded-full"
            />
            <span>1</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={
                "https://img.game8.co/3824101/368533c5409763aed06ed53c738f6800.png/show"
              }
              height={20}
              width={20}
              alt=""
              className="border rounded-full"
            />
            <span>1</span>
          </div>
        </div>

        <span className="text-xs text-center">
          Lamball is a Pal with the Fluffy Shield Partner Skill and the Neutral
          Element type. Learn how to get Lamball, the best breeding combos to
          breed Lamball, its day and night location, stats, skills, work
          suitability, and item drops!
        </span>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
