import { BackButton, titleClass } from "@/components/common";

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

	const title = "/about";

	return (
		<div className="p-7 md:p-10">
			<div className="space-y-8">
				<h1 className={titleClass}>{title}</h1>

				<BackButton page="home" path="/" />

				<section className="text-lg md:text-xl space-y-4">
					<p>
						$ Hello! My name is{" "}
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
						<span className="font-bold text-pink-400">
							technology & visual arts
						</span>{" "}
						together!
					</p>

					<div>
						<div className="mb-2">
							$ I am{" "}
							<span className="text-yellow-200 font-bold">proficient</span> in:
						</div>

						<div className="flex flex-col md:flex-row md:px-10 md:space-x-7">
							<ul
								className="text-lg md:text-xl space-y-0 md:space-y-1"
								/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
								dangerouslySetInnerHTML={{ __html: rolesTableHTML }}
							/>
							<ul
								className="text-lg md:text-xl space-y-0 md:space-y-1"
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
