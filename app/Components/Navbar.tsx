"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";

interface NavBarProps {
  onSearch: (value: string) => void;
}

export default function Navbar({ onSearch }: NavBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value.toString());
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/parentSearch" className="btn btn-outline btn-primary">
                Parent Search
              </a>
            </li>
            <li>
              <a
                href="/breedingCalculator"
                className="btn btn-outline btn-accent"
              >
                Breeding Calculator
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Image
          src={"/PaldeckLogo-removebg-preview.png"}
          height={250}
          width={250}
          alt=""
        />
      </div>
      <div className="navbar-end">
        <div className="form-control hidden sm:block">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
