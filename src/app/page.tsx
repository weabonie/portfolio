"use client";

// @ts-expect-error: Should still import Donut
import Donut from "react-spinning-donut";

import { wordsData } from "@/components/data";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTerminalLoading } from "@/components/bootContext";

const pages = [
	["about", "1.5"],
	["experience", "1.75"],
	["projects", "2"],
	["contact", "2.25"],
];

const emoticonList = [
	"ಠ_ಠ",
	"^_^",
	"(=^ェ^=)",
	"(｡◕‿◕｡)",
	"｡^‿^｡",
	"(¬_¬)",
	"( ͡° ͜ʖ ͡°)",
	"( •_•)",
	"(ᗒᗣᗕ)՞",
	"(•‿•)",
	"(◕‿◕)",
	"◉‿◉",
	"(>_<)",
	"(⋟﹏⋞)",
	"(◣_◢)",
	"(•ㅅ•)",
];

function getRandom(list: string[]) {
	return list[Math.floor(Math.random() * list.length)];
}

export default function Home() {
	const [bootText, setBootText] = useState<string>("booting...");
	const { isLoaded, setIsLoaded } = useTerminalLoading();

	const [hovered, setHovered] = useState<string | null>();
	const [emoticon, setEmoticon] = useState<string>(getRandom(emoticonList));

	const [showDonut, setShowDonut] = useState<boolean>(false);

	const [menuBtns, setMenuBtns] = useState<string[]>([]);

	const onHovered = (hovering: string) => {
		setHovered(hovering);
		setEmoticon(getRandom(emoticonList));
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const startUp = () => {
			pages.forEach((page, index) => {
				setTimeout(() => {
					setMenuBtns((prevMenuBtns) => [...prevMenuBtns, page[0]]);

          setTimeout(() => {
            if (index === pages.length - 1) {
              setShowDonut(true)
            }
          }, 250)
				}, Number(page[1]) * 1000);
			});
		};

		if (isLoaded === false) {
			setTimeout(() => {
				setBootText("success!");

				setTimeout(() => {
					setIsLoaded(true);
					startUp();
				}, 1000);
			}, 1500);
		} else {
			pages.forEach((page, index) => {
				setMenuBtns((prevMenuBtns) => [...prevMenuBtns, page[0]]);
        setShowDonut(true)
			});
		}
	}, []);

	if (!isLoaded)
		return (
			<main>
				<section>
					<h1 className="text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						{bootText}
					</h1>
				</section>
			</main>
		);

	return (
		<main className="p-10">
			{showDonut && (
				<section
					className={
						"absolute left-3/4 top-[45%] -translate-x-1/2 -translate-y-1/2"
					}
				>
					<Donut
						scaleX={2.4}
						scaleY={1}
						frameInterval={50}
						fontSize={9}
            color={"white"}
					/>
				</section>
			)}

			<section className="space-y-12 z-10">
				<section>
					<h1 className="text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
						weabonie&apos;s portfolio
					</h1>

					<div className="text-2xl font-bold text-gray-400">
						{"> "}
						{emoticon}
					</div>
				</section>

				<section className="flex flex-col h-[370px] justify-start">
					<ul className="h-[300px] text-4xl font-semibold space-y-4 px-12">
						{menuBtns.map((page, i) => {
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={i}>
									<Link
										onMouseLeave={() => setHovered(null)}
										onFocus={() => onHovered(page)}
										onMouseOver={() => onHovered(page)}
										className="hover:text-console"
										href={`/${page}`}
									>
										{page === hovered ? `> ${page}` : `\u00A0\u00A0${page}`}
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="w-full h-[150px] px-10 py-12 text-2xl">
						{hovered && (
							<>
								<div className="font-serif text-terminal">
									<span className="font-bold">{hovered}</span>{" "}
									<span>
										{" "}
										{
											wordsData[hovered as keyof typeof wordsData]
												.pronounciation
										}
									</span>
								</div>
								<div>
									{wordsData[hovered as keyof typeof wordsData].definition}
								</div>
							</>
						)}
					</div>
				</section>
			</section>
		</main>
	);
}
