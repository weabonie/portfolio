import { projectsData } from "@/components/data";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import type { ProjectProps } from "@/components/types";

export default function Carousel({
	projectProps,
}: { projectProps: ProjectProps }) {

	const handleChange = (swiper: SwiperClass) => {
		projectProps.setProjIndex(swiper.realIndex);
	};

	return (
		<section>
			<Swiper
				lazyPreloaderClass={"swiper-lazy-preloader"}
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				direction="horizontal"
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination
				modules={[EffectCoverflow, Pagination]}
				className="w-full h-[500px]"
				onSlideChange={handleChange}
			>
				{projectsData.map((project, index) => (
					<SwiperSlide
						key={project.name}
						className={"swiper-slide !w-[400px] !h-[270px]"}
					>
						<img
							className="absolute h-full"
							alt="carousel img"
							src={`/projects${project.thumbnail}`}
						/>

						{(project.video && projectProps.projIndex === index) && (
							<div className="absolute flex justify-center opacity-0 animate-videoFade bg-black z-10  h-full">
								<video className="" muted loop autoPlay>
									<source src={`/projects${project.video}`} />
								</video>
							</div>
						)}
					</SwiperSlide>
				))}
			</Swiper>

			{/* <div className="flex flex-col space-y-2 justify-start items-center ">
				<div className="w-3/4 flex justify-between items-center space-x-4">
					<div
						className={`opacity-70 scale-75 space-y-4 ${projectsData[projIndex - 1] ? "visible" : "invisible"}`}
					>
						<img
							width={600}
							height={400}
							alt="Project thumbnail"
							src={`/projects${projectsData[projIndex - 1]?.thumbnail || "/placeholder.png"}`}
						/>
						{projectsData[projIndex - 1] && (
							<div className="text-center font-bold">
								{projectsData[projIndex - 1].name}
							</div>
						)}
					</div>

					<div>
						<img
							width={600}
							height={400}
							alt="Project thumbnail"
							src={`/projects${projectsData[projIndex]?.thumbnail || "/placeholder.png"}`}
						/>
					</div>

					<div
						className={`opacity-70 scale-75 space-y-4 ${projectsData[projIndex + 1] ? "visible" : "invisible"}`}
					>
						<img
							width={600}
							height={400}
							alt="Project thumbnail"
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
					<p className="h-0 font-light text-title">
						{projectsData[projIndex].date}
					</p>

					<p className="h-12">{projectsData[projIndex].description}</p>

					<Link
						className="text-base text-terminal hover:underline"
						href={`/projects/${projectsData[projIndex].page}`}
					>
						[click here for details]
					</Link>
				</div>
			</div> */}
		</section>
	);
}
