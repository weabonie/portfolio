"use client";

import { BackButton, titleClass } from "@/components/common";
import { expData } from "@/components/data";

export default function About() {
	const title = "/experience";

	return (
		<div className="p-7 md:p-10">
			<div className="space-y-10">
				<h1 className={titleClass}>{title}</h1>

				<BackButton page="home" path="/" />

				<section className="grid grid-cols-4 gap-4">
					{expData.map((experience) => (
						<div className="flex flex-col justify-between h-[160px] p-5 border-2" key={experience.role}>
							<div className="">
								<h1 className="text-2xl font-bold">{experience.company}</h1>
								<h2 className="text-lg text-gray-200">{experience.role}</h2>
							</div>

							<h2 className="text-lg text-gray-200">{experience.date}</h2>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}
