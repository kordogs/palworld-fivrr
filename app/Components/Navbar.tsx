"use client";
import Image from "next/image";

interface NavBarProps {
  onSearch: (value: string) => void;
}

export default function Navbar({ onSearch }: NavBarProps) {
  return (
    <div className="navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <Image
          src={"/PaldeckLogo-removebg-preview.png"}
          height={200}
          width={200}
          alt=""
        />
      </div>
      <div className="navbar-end">
        {/* <div className="form-control hidden sm:block">
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
        </button> */}
      </div>
    </div>
  );
}
