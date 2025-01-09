"use client";

import Link from "next/link";

export default function About() {
	const title = "/contact";
	const titleClass =
		"text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(8)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(8)_forwards,_blink_1s_steps(8)_infinite_1s] after:bg-white";

	return (
		<div className="p-10">
			<div className="space-y-10">
				<h1 className={titleClass}>{title}</h1>

				<Link href="/" className="text-2xl font-semibold hover:text-console">
					{">"} back to home
				</Link>

				<section className="text-xl space-y-5">
					<p>WIP ;-;</p>
				</section>
			</div>
		</div>
	);
}
