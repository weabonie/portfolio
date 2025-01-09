"use client";

import { projectsData } from "@/components/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
	const title = "projects";

	const [projIndex, setProjIndex] = useState<number>(0);

	const handleLeft = () => {
		if (projIndex > 0) {
			setProjIndex(projIndex - 1);
		}
	};

	const handleRight = () => {
		if (projIndex < projectsData.length - 1) {
			setProjIndex(projIndex + 1);
		}
	};

	return (
		<main className="p-10">
			<div className="space-y-10">
				<h1 className="text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(8)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(8)_forwards,_blink_1s_steps(8)_infinite_1s] after:bg-white">
					{title}
				</h1>

				<Link href="/" className="text-2xl font-semibold hover:text-console">
					{">"} back to home
				</Link>
			</div>

			<section>
				<div className="flex flex-col space-y-4 justify-start items-center ">
					<div className="w-3/4 flex justify-between items-center space-x-4">
						<div
							className={`opacity-70 scale-75 space-y-4 ${projectsData[projIndex - 1] ? "visible" : "invisible"}`}
						>
							<Image
								width={600}
								height={400}
								alt="NextUI Album Cover"
								src={`/projects${projectsData[projIndex - 1]?.thumbnail || "/placeholder.png"}`}
							/>
							{projectsData[projIndex - 1] && (
								<div className="text-center font-bold">
									{projectsData[projIndex - 1].name}
								</div>
							)}
						</div>

						<div>
							<Image
								width={600}
								height={400}
								alt="NextUI Album Cover"
								src={`/projects${projectsData[projIndex]?.thumbnail || "/placeholder.png"}`}
							/>
						</div>

						<div
							className={`opacity-70 scale-75 space-y-4 ${projectsData[projIndex + 1] ? "visible" : "invisible"}`}
						>
							<Image
								width={600}
								height={400}
								alt="NextUI Album Cover"
								src={`/projects${projectsData[projIndex + 1]?.thumbnail || "/placeholder.png"}`}
							/>
							{projectsData[projIndex + 1] && (
								<div className="text-center font-bold">
									{projectsData[projIndex + 1].name}
								</div>
							)}
						</div>
					</div>

					<div className="flex justify-between w-[30%] font-bold text-3xl">
						<button
							type="button"
							onClick={handleLeft}
							className="hover:text-console"
						>
							{"⮜"}
						</button>
						<div className="font-bold text-console">
							{projectsData[projIndex].name}
						</div>
						<button
							type="button"
							onClick={handleRight}
							className="hover:text-console"
						>
							{"⮞"}
						</button>
					</div>

					<div className="flex flex-col space-y-7 w-[40%] text-center text-lg">
						<p className="h-12">{projectsData[projIndex].description}</p>

						<Link
							className="text-base text-terminal hover:underline"
							href={`/projects/${projectsData[projIndex].page}`}
						>
							[click here for details]
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
