"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CodeSpace from "./CodeSpace";
import HoverCard from "./HoverCard";
import { motion } from "framer-motion";
import {
	actionsPro,
	mobile,
	proArc,
	proBag,
	proCover,
	procodeSpace,
} from "@public";

export default function Productivity() {
	const [hovered, setHovered] = useState<boolean>(false);
	const [hovered1, setHovered1] = useState<boolean>(false);
	const [hovered2, setHovered2] = useState<boolean>(false);

	return (
		<div className="w-full relative">
			<div className="flex md:pl-10 space-x-3 md:space-x-10">
				<div className="flex flex-col items-center">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: false }}
						className="relative w-[20px] mb-4">
						<Image
							src={proBag}
							alt="иконка сумки"
							width={30}
							height={30}
						/>
						<span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3" />
					</motion.div>
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: "100%" }}
						transition={{ duration: 0.4, delay: 0.6 }}
						className=" h-full w-[4px] mt-7 rounded-md bg-gradient-to-b from-[#33b3ae] via-[#2ea043] to-transparent"
					/>
				</div>
				<div className="md:w-10/12 mb-24 w-full">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.3 }}
						viewport={{ once: false }}
						className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
						style={{ transitionDelay: "200ms" }}>
						Производительность
					</motion.div>
					<motion.h3
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.3 }}
						viewport={{ once: false }}
						className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
						style={{ transitionDelay: "300ms" }}>
						<span className="text-[#33b3ae]">Ускорьте творческий процесс</span>
						<br />
						Наш ИИ-помощник значительно повышает скорость и качество работы с аудио.
					</motion.h3>
				</div>
				<div className="relative w-[50%] lg:block hidden">
					<Image
						src={proArc}
						alt="Декоративный элемент"
						width={1225}
						height={1025}
						className="absolute right-[-60%] top-20 w-full h-full -z-10"
					/>
				</div>
			</div>

			<Image
				className="w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]"
				width={2500}
				height={1500}
				loading="lazy"
				decoding="async"
				alt="Иллюстрация интерфейса аудиоредактора с различными панелями."
				src={proCover}
			/>

			<CodeSpace />

			<div className="relative z-[1]">
				<HoverCard
					backgroundColor="#939aff"
					direction=""
					className="w-full"
					left="0">
					<div className="overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6 justify-between md:min-w-[400px]">
						<p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
							<span className="text-white font-medium">Автоматизация процессов </span>
							позволяет легко управлять рутинными задачами записи, обработки и экспорта аудио.
						</p>
						<div>
							<Link
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
								href=""
								className="py-1 inline-block text-xl text-white font-semibold">
								Узнать больше о функциях
								{/* SVG стрелка */}
								{/* ... (оставил без изменений) */}
							</Link>
						</div>
					</div>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ type: "tween" }}
						className="rounded-r-md overflow-hidden flex items-center">
						<Image
							className="responsive js-build-in-item build-in-scale-fade build-in-animate origin-bottom-right"
							width={400}
							height={200}
							loading="lazy"
							decoding="async"
							alt="Иллюстрация функционала"
							aria-hidden="true"
							src={actionsPro}
						/>
					</motion.div>
				</HoverCard>
			</div>

			{/* Остальные HoverCard компоненты — без изменений, функция maybeNoirSound не использовалась внутри них */}

			<motion.div
				initial={{ height: 0 }}
				whileInView={{ height: "160px" }}
				transition={{ delay: 0.3 }}
				viewport={{ once: false }}
				className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[4px] rounded-md bg-gradient-to-b from-transparent to-[#33b3ae]"
			/>
		</div>
	);
}
