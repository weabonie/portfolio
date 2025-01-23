"use client";

import { useEffect, useState } from "react";
import Carousel from "./carousel";
import { BackButton, titleClass } from "@/components/common";
import { projectsData } from "@/components/data";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

export default function About() {
	const title = "/projects";

	const [projIndex, setProjIndex] = useState<number>(0);
	const [matches, setMatches] = useState<boolean>(false);

	useEffect(() => {
		setMatches(window.matchMedia("(min-width: 768px)").matches);

		window
			.matchMedia("(min-width: 768px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	return (
		<main className="p-7 md:p-10 space-y-5">
			<div className="space-y-10">
				<h1 className={titleClass}>{title}</h1>

				<BackButton page="home" path="/" />
			</div>

			<section className="scale-90 flex flex-col justify-center items-center space-y-1 md:space-y-4">
				<Carousel
					projectProps={{ projIndex: projIndex, setProjIndex: setProjIndex }}
				/>

				<div className="z-10 h-[200px] md:h-[150px] p-5 md:p-0 absolute translate-y-28 text-center">
					<h1 className="text-base md:text-2xl flex justify-center text-console font-bold">
						<div className="relative">
							<span className="absolute -left-6 animate-projectLeftQuote">
								❝
							</span>
							{projectsData[projIndex].name}
							<span className="absolute -right-6 animate-projectRightQuote">
								❞
							</span>
						</div>
					</h1>
					<h2 className="text-sm md:text-base text-terminal">
						{projectsData[projIndex].date}
					</h2>

					<p className="w-[300px] md:w-[700px] py-3 md:py-2 text-sm md:text-base">
						{projectsData[projIndex].description}
					</p>

					<div className="md:my-1 flex justify-center">
						{projectsData[projIndex].links.website && (
							<Link
								target="_blank"
								className="hover:text-title text-gray-400 transition-colors"
								href={projectsData[projIndex].links.website}
							>
								<FaLink size={matches ? 30 : 25} />
							</Link>
						)}

						{projectsData[projIndex].links.github && (
							<Link
								target="_blank"
								className="hover:text-title text-gray-400 transition-colors"
								href={projectsData[projIndex].links.github}
							>
								<FaGithub size={matches ? 30 : 25} />
							</Link>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
