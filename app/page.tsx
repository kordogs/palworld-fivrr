"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import ThemeController from "./Components/ThemeController";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // or "dark" depending on your default theme

  return (
    <div
      style={{
        backgroundImage:
          theme === "dark"
            ? `url(https://r4.wallpaperflare.com/wallpaper/22/240/855/texture-gradient-simple-background-blue-wallpaper-58568c5acfdc97f97ec049e292e9cbb0.jpg)`
            : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="px-10"
    >
      <div className="mb-5">
        <Navbar />
      </div>

      <div className="flex justify-center min-h-screen">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
      <ThemeController theme={theme} setTheme={setTheme} />
    </div>
  );
}
