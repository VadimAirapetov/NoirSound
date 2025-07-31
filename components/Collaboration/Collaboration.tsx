"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Discount from "./Discount";
import { colabItems } from "@constants";
import { motion } from "framer-motion";
import HoverCard from "../Productivity/HoverCard";
import {
	collabArc,
	issuesColab,
} from "@public";
import { collabcontainervarients, collabitemvarients } from "@motion";

export default function Collaboration() {
	const [hovered, setHovered] = useState(false);
	const [hovered1, setHovered1] = useState(false);
	const [hovered2, setHovered2] = useState(false);

	return (
		<div className="w-full pt-12">
			<div className="flex md:pl-7 space-x-3 md:space-x-10">
				<div className="flex flex-col items-center">
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="relative">
						<svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor" className="text-white">
							<path d="..." />
						</svg>
						<span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3" />
					</motion.div>
					<motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ delay: 0.8 }} className="h-full w-[4px] mt-7 rounded-md bg-gradient-to-b from-[#f778ba] to-transparent" />
				</div>
				<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: "tween" }} className="md:w-10/12 mb-24">
					<h2 className="text-[20px] md:text-2xl mb-7 font-medium text-white">Совместная работа</h2>
					<h3 className="text-[28px] md:text-[40px] lg:text-5xl mb-7 font-medium text-white">
						<span className="text-[#33b3ae]">Усиление креативных коллабораций</span>
						<br />
						Инструменты для совместного сведения, редактирования и обмена аудиофайлами.
					</h3>
				</motion.div>
				<div className="relative w-[50%] lg:block hidden">
					<Image src={collabArc} alt="" width={502} height={735} className="absolute top-[9%] right-[-15%] -z-10" />
				</div>
			</div>
			<Image
				className="w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]"
				width="2500"
				height="1500"
				loading="lazy"
				alt="Иллюстрация интерфейса с треками в проекте."
				src={issuesColab}
			/>
			<Discount />

			{/* Остальной контент карточек и ссылок — переведем в следующей части */}
		</div>
	);
}
