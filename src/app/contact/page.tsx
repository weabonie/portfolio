"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
	const [togglePrint, setTogglePrint] = useState<boolean>(false);
	const [toggleSocials, setToggleSocials] = useState<boolean>(false);

	const title = "/contact";
	const titleClass =
		"text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(8)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(8)_forwards,_blink_1s_steps(8)_infinite_1s] after:bg-white";

	const printClass =
		"text-xl h-9 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(20)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(20)_forwards,_blink_1s_steps(20)_infinite_1s] after:bg-white";

	useEffect(() => {
		setTimeout(() => {
			setTogglePrint(true);

			setTimeout(() => {
				setTogglePrint(false);
				setToggleSocials(true);
			}, 1500);
		}, 1000);
	}, []);

    const emailLink = "mailto:weabonie@gmail.com"
    const linkedInLink = "https://www.linkedin.com/in/duc-nguyen-b27425287"
    const githubLink = "https://github.com/weabonie"
    const igLink = "https://www.instagram.com/weabonie"

	const contactTableHTML = `
  <li>+-----------------+</li>
<li>|&nbsp; <span class="font-bold">CONTACT LINKS</span> &nbsp;|</li>
<li>+-----------------+</li>
<li>|&nbsp; <a class="text-[#fa7272] hover:underline" href="${emailLink}">Email</a> ${"&nbsp;".repeat(9)}|</li>
<li>|&nbsp; <a target="_blank" rel="noopener noreferrer" class="text-[#7ab1e7] hover:underline" href="${linkedInLink}">LinkedIn</a> ${"&nbsp;".repeat(6)}|</li>
<li>|&nbsp; <a target="_blank" rel="noopener noreferrer" class="text-[#b98ff8] hover:underline" href="${githubLink}">GitHub</a> ${"&nbsp;".repeat(8)}|</li>
<li>|&nbsp; <a target="_blank" rel="noopener noreferrer" class="text-[#ba845d] hover:underline" href="${igLink}">Instagram</a> ${"&nbsp;".repeat(5)}|</li>
<li>+-----------------+</li>
  `;

	return (
		<div className="p-10">
			<div className="space-y-10">
				<h1 className={titleClass}>{title}</h1>

				<Link href="/" className="text-2xl font-semibold hover:text-console">
					{">"} back to home
				</Link>

				<section className="text-xl space-y-5">
					<h1 className="text-3xl">
						Let's <span className="font-bold text-title">work</span> together!
						{!toggleSocials ? " Wait for a sec." : " Here."}
					</h1>

					{togglePrint && (
						<p className={printClass}>{"> "}print(contact_list)</p>
					)}

					{toggleSocials && (
						<ul
							className="text-3xl px-10 space-y-3"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{ __html: contactTableHTML }}
						/>
					)}
				</section>
			</div>
		</div>
	);
}
