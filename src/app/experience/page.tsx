"use client";

import { BackButton, titleClass } from "@/components/common";

export default function About() {
  	const title = "/experience"  
	
	return (
		<div className="p-7 md:p-10">
			<div className="space-y-10">
				<h1 className={titleClass}>{title}</h1>

				<BackButton page="home" path="/"/>

				<section className="text-xl space-y-5">
					<p>WIP ;-;</p>
				</section>
			</div>
		</div>
	);
}
