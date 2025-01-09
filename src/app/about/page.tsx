import Link from "next/link";

export default function About() {
	const rolesTableHTML = `
  <li>+-----------------------+</li>
  <li>|${"&nbsp;".repeat(9)}<span class="font-bold">ROLES</span>${"&nbsp;".repeat(9)}|</li>
  <li>+-----------------------+</li>
  <li>|&nbsp;WEB DESIGN${"&nbsp;".repeat(12)}|</li>
  <li>|&nbsp;FRONTEND${"&nbsp;".repeat(14)}|</li>
  <li>|&nbsp;BACKEND${"&nbsp;".repeat(15)}|</li>
  <li>|&nbsp;GAME DEVELOPMENT${"&nbsp;".repeat(6)}|</li>
  <li>+-----------------------+</li>
  `;

	const languageTableHTML = `
  <li>+-----------------------+</li>
  <li>|${"&nbsp;".repeat(7)}<span class="font-bold">LANGUAGES</span>${"&nbsp;".repeat(7)}|</li>
  <li>+-----------------------+</li>
  <li>|&nbsp;JAVASCRIPT/TYPESCRIPT&nbsp;|</li>
  <li>|&nbsp;REACT.JS${"&nbsp;".repeat(14)}|</li>
  <li>|&nbsp;PYTHON${"&nbsp;".repeat(16)}|</li>
  <li>|&nbsp;C++ ${"&nbsp;".repeat(18)}|</li>
  <li>|&nbsp;JAVA ${"&nbsp;".repeat(17)}|</li>
  <li>|&nbsp;GO ${"&nbsp;".repeat(19)}|</li>
  <li>+-----------------------+</li>
  `;

  const title = "/about"
  const titleClass = "text-7xl h-20 relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-[typewriter_1s_steps(6)_forwards] before:bg-background after:absolute after:inset-0 after:w-[0.125em] after:animate-[typewriter_1s_steps(6)_forwards,_blink_1s_steps(6)_infinite_1s] after:bg-white"

	return (
		<div className="p-10">
			<div className="space-y-8">
				<h1 className={titleClass}>
					{title}
				</h1>

				<Link href="/" className="text-2xl font-semibold hover:text-console">
					{">"} back to home
				</Link>

				<section className="text-xl space-y-4">
					<p>
						$ Hello! My name is{" "}
						<span className="text-cyan-200 font-bold">Duc Nguyen</span>, but you
						can just call me{" "}
						<span className="text-cyan-200 font-bold">Henry</span>.
					</p>

					<p>
						$ I am currently a <span className="font-bold">sophomore</span>{" "}
						majoring Computer Science in{" "}
						<span className="text-[#C8102E] font-bold">
							University of Houston
						</span>
						.
					</p>

          {/* <p>
						$ I am also experienced in <span className="font-bold">web development</span> and <span className="font-bold">ROBLOX game design</span>.
					</p> */}

					<p>
						$ I always have a deep passion in blending{" "}
						<span className="font-bold text-pink-400">technology & visual arts</span>{" "}
						together!
					</p>

					<div>
						<div className="mb-2">
							$ I am{" "}
							<span className="text-yellow-200 font-bold">proficient</span> in:
						</div>

						<div className="flex px-10 space-x-7">
							<ul
								className="text-xl space-y-1"
								/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
								dangerouslySetInnerHTML={{ __html: rolesTableHTML }}
							/>
							<ul
								className="text-xl space-y-1"
								/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
								dangerouslySetInnerHTML={{ __html: languageTableHTML }}
							/>
              
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
