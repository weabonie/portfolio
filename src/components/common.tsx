"use client";

import Link from "next/link";
import { useState } from "react";

export const BackButton = ({ page, path }: { page: string; path?: string }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<Link
			onMouseLeave={() => setHovered(false)}
			onMouseOver={() => setHovered(true)}
			href={`/${path || page}`}
			className="relative text-2xl font-semibold hover:text-console ml-10"
		>
			<div className="absolute left-0 -translate-x-10 animate-homeSelect">
				{">"}
			</div>
			<span>back to {page}</span>
		</Link>
	);
};

export const titleClass = "text-4xl mb-1 md:mb-0 md:text-7xl h-17 md:h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(6)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(6)_forwards,_blink_1s_steps(6)_infinite_1s] after:bg-white"