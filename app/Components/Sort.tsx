import React from "react";
import ButtonImage from "./ButtonImage";

export default function Sort() {
  return (
    <div className="flex justify-center flex-col items-center gap-2 mb-5">
      <div className="type flex gap-2">
        <ButtonImage
          type="Dark"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Dragon"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Electric"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Fire"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Grass"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Ground"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Ice"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Neutral"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type="Water"
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <button className="border px-1 rounded-full flex justify-center items-center">
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
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Watering"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Planting"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Electricity"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Gathering"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Lumbering"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Mining"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Medicine"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Cooling"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Transporting"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ButtonImage
          type={"Farming"}
          onclick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <button className="border px-1 rounded-full flex justify-center items-center">
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
  );
}
