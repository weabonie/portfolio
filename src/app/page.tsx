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

	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		setMatches(window.matchMedia("(min-width: 768px)").matches)

		window
			.matchMedia("(min-width: 768px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);

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
							setShowDonut(true);
						}
					}, 250);
				}, Number(page[1]) * 1000);
			});
		};

		setMenuBtns([]);

		if (isLoaded === false) {
			setTimeout(() => {
				setBootText("success!");

				setTimeout(() => {
					setIsLoaded(true);
					startUp();
				}, 1000);
			}, 1500);
		} else {
			for (let index = 0; index < pages.length; index++) {
				const page = pages[index];
				setMenuBtns((prevMenuBtns) => [...prevMenuBtns, page[0]]);
				setShowDonut(true);
			}
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
		<main className="p-7 md:p-10">
			{showDonut && (
				<section
					className={
						"absolute left-1/2 md:left-3/4 top-[65%] md:top-[45%] -translate-x-1/2 -translate-y-1/2"
					}
				>
					<Donut
						scaleX={2.4}
						scaleY={1}
						frameInterval={50}
						fontSize={matches ? 9 : 4}
						color={"white"}
					/>
				</section>
			)}

			<section className="space-y-9 md:space-y-12 z-10 w-[max-content]">
				<section className="w-[max-content]">
					<h1 className="text-3xl md:text-6xl lg:text-7xl h-9 md:h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
						weabonie&apos;s portfolio
					</h1>

					<div className="text-xl md:text-2xl w-[max-content] font-bold text-gray-400">
						{"> "}
						{emoticon}
					</div>
				</section>

				<section className="flex flex-col h-[370px] w-[max-content] justify-start">
					<ul className="h-[300px] text-2xl md:text-4xl font-semibold space-y-2 md:space-y-4 px-7 md:px-12">
						{menuBtns.map((page, i) => {
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<li key={i}>
									<Link
										onMouseLeave={() => setHovered(null)}
										onFocus={() => onHovered(page)}
										onMouseOver={() => onHovered(page)}
										className="hover:text-console relative transition-colors"
										href={`/${page}`}
									>
										{hovered === page && (
											<div className="absolute left-0 -translate-x-12 animate-homeSelect">
												{">"}
											</div>
										)}
										<span>{page}</span>
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="w-full h-[150px] px-10 py-12 text-2xl hidden md:block">
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
