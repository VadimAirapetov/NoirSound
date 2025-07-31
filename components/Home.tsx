"use client";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import {
	Collaboration,
	Footer,
	Hero,
	Productivity,
	Security,
	StickyNav,
} from "@components";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<div>
				<div className="overflow-hidden">
					<div className="md:px-12 max-md:px-5 overflow-hidden">
						<Hero />
					</div>
					<StickyNav />
					<div
						id="productivity"
						className="home-campaign-productivity md:px-12 max-md:px-5 pt-12 overflow-hidden">
						<Productivity />
					</div>
					<div
						id="security"
						className="home-campaign-productivity overflow-hidden md:px-12 max-md:px-5 pt-8">
						<Security />
					</div>
					<div
						id="collaboration"
						className="home-campaign-productivity md:px-12 max-md:px-5  overflow-hidden">
						<Collaboration />
					</div>
					<div className="w-full relative z-[2] md:px-12 max-md:px-5">
						<ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
							<li>
								<sup id="footnote-1">1</sup> По данным многолетних исследований,
								время обработки аудиозаписей сокращается в 7 раз с
								использованием современных инструментов, что подтверждается
								нашим опытом и отзывами пользователей.
							</li>
							<br />
							<li>
								<sup id="footnote-2">2</sup> Экономический эффект от использования
								аудиоредактора NoirSound подтверждён независимыми исследованиями,
								проводимыми отраслевыми экспертами в 2024 году.
							</li>
							<br />
							<li>
								<sup id="footnote-3">3</sup> Сейчас более 2 миллионов музыкантов и
								звукорежиссёров по всему миру доверяют своим проектам нашему
								продукту.
								<Link href="https://noirsound.example/blog/popularity">
									Узнайте подробнее на нашем блоге.
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
