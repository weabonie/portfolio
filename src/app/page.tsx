"use client";

import { wordsData } from "@/components/data";
import { useState } from "react";

const pages = [
  ["about", 2.5],
  ["experience", 2.75],
  ["projects", 3],
  ["contact", 3.25],
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>();

  return (
    <div className="p-10">
      <div className="space-y-12">
        <h1 className="text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
          weabonie's portfolio
        </h1>

        <div className="w-1/2">
          <ul className="text-4xl space-y-4 px-12">
            {pages.map((page, i) => {
              const className = `hover:underline invisible animate-[showCmd_0s_steps(11)_forwards_${page[1]}s]`;
              return (
                <li
                  key={i}
                  onMouseLeave={() => setHovered(null)}
                  onMouseOver={() => {
                    typeof page[0] == "string" && setHovered(page[0]);
                  }}
                  className={className}
                >
                  <a href={`/${page[0]}`}>
                    {">"} {page[0]}
                  </a>
                </li>
              );
            })}

            {/* <li onMouseOver={onHover} className={`hover:underline invisible animate-[showCmd_0s_steps(11)_forwards_2.5s]`}><a href={`/about`}>{'>'} {"about"}</a></li>
            <li onMouseOver={onHover} className={`hover:underline invisible animate-[showCmd_0s_steps(11)_forwards_2.75s]`}><a href={`/experience`}>{'>'} {"experience"}</a></li>
            <li onMouseOver={onHover} className={`hover:underline invisible animate-[showCmd_0s_steps(11)_forwards_3s]`}><a href={`/projects`}>{'>'} {"projects"}</a></li>
            <li onMouseOver={onHover} className={`hover:underline invisible animate-[showCmd_0s_steps(11)_forwards_3.25s]`}><a href={`/contact`}>{'>'} {"contact"}</a></li>           */}
          </ul>
        </div>

        {hovered && (
          <div className="w-full h-[150px] px-10 py-2">
            <div className="font-serif text-2xl">
              <span className="font-bold">{hovered}</span>{" "}
              <span>
                {" "}
                {wordsData[hovered as keyof typeof wordsData].pronounciation}
              </span>
             
            </div>
            <div className="text-xl">{wordsData[hovered as keyof typeof wordsData].definition}</div>
          </div>
        )}
      </div>
    </div>
  );
}
