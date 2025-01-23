"use client";

import { useState } from "react";
import Carousel from "./carousel";
import { BackButton, titleClass } from "@/components/common";
import { projectsData } from "@/components/data";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

export default function About() {
	const title = "/projects";

	const [projIndex, setProjIndex] = useState<number>(0);
	// console.log(projectsData[projectIndex].name)

	return (
		<main className="p-7 md:p-10 space-y-5">
			<div className="space-y-10">
				<h1 className={titleClass}>{title}</h1>

				<BackButton page="home" path="/" />
			</div>

			<section className="flex flex-col justify-center items-center space-y-4">
				<Carousel
					projectProps={{ projIndex: projIndex, setProjIndex: setProjIndex }}
				/>

				<div className="z-10 h-[150px] absolute translate-y-28 text-center">
					<h1 className="flex justify-center text-2xl text-console font-bold">
						<div className="relative">
							<span className="absolute -left-6 animate-projectLeftQuote">❝</span>
							{projectsData[projIndex].name}
							<span className="absolute -right-6 animate-projectRightQuote">❞</span>
						</div>
					</h1>
					<h2 className="text-base text-terminal">
						{projectsData[projIndex].date}
					</h2>

					<p className="max-w-3xl py-2 text-base">
						{projectsData[projIndex].description}
					</p>

					<div className="my-1 flex justify-center">
						{projectsData[projIndex].links.website && (
							<Link
								target="_blank"
								className="hover:text-title text-gray-400 transition-colors"
								href={projectsData[projIndex].links.website}
							>
								<FaLink size={30} />
							</Link>
						)}

						{projectsData[projIndex].links.github && (
							<Link
								target="_blank"
								className="hover:text-title text-gray-400 transition-colors"
								href={projectsData[projIndex].links.github}
							>
								<FaGithub size={30} />
							</Link>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
