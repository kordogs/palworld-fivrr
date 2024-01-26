import Image from "next/image";
import React from "react";
import pals from "../json/pals.json";

const Monster = pals;

export default function BreedingCalculator() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className=" text-lg font-bold mb-5">Breeding Parents</h1>
      <div className="flex justify-between gap-10">
        <div className="right">
          <h2 className="text-center font-bold text-sm mb-2">Parent 1</h2>
          <Image
            src={"/pals/Anubis.webp"}
            height={200}
            width={200}
            className="border mb-5"
            alt={""}
          />
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Parent 1
            </option>
            <option>Anubis</option>
          </select>
        </div>
        <div className="left">
          <h2 className="text-center font-bold text-sm mb-2">Parent 2</h2>
          <Image
            src={"/pals/Anubis.webp"}
            height={200}
            width={200}
            className="border mb-5"
            alt={""}
          />
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Parent 2
            </option>
            <option>Anubis</option>
          </select>
        </div>
      </div>
    </div>
  );
}
