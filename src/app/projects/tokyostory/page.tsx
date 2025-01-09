'use client'

import Link from "next/link";

export default function About() {
    const title = "tokyo-story"
	return (
		<div className="p-10">
			<div className="space-y-10">
				<h1 className={"text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(7)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(7)_forwards,_blink_1s_steps(7)_infinite_1s] after:bg-white"}>
					{title}
				</h1>

				<Link href="/projects" className="text-2xl font-semibold hover:text-console">
					{">"} back to projects
				</Link>

				<section className="text-xl space-y-5">
					<p>WIP ;-;</p>
				</section>
			</div>
		</div>
	);
}
