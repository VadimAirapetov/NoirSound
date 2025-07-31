"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyNav() {
	const [isSticky, setIsSticky] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [product, setProduct] = useState(false);
	const [collab, setCollab] = useState(false);
	const [security, setSecurity] = useState(false);
	const [product1, setProduct1] = useState(false);
	const [collab1, setCollab1] = useState(false);
	const [security1, setSecurity1] = useState(false);
	const [smallNav, setSmallNav] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [hovered1, setHovered1] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const element = document.getElementById("nav");
			const topCoordinate = element?.getBoundingClientRect().top;
			const Product = document.getElementById("productivity");
			const topProduct = Product?.getBoundingClientRect().top;
			const Collab = document.getElementById("collaboration");
			const topCollab = Collab?.getBoundingClientRect().top;
			const Security = document.getElementById("security");
			const topSecurity = Security?.getBoundingClientRect().top;

			if (topCoordinate && topCoordinate < 0) {
				setIsSticky(true);
			}
			if (topCoordinate && topCoordinate < -20) {
				setIsFixed(true);
			}
			if (topCoordinate && topCoordinate > -20) {
				setIsFixed(false);
			}
			if (topCoordinate && topCoordinate > 0) {
				setIsSticky(false);
			}
			if (topProduct && topProduct < 10) {
				setProduct(true);
				setCollab(false);
				setSecurity(false);
			}
			if (topSecurity && topSecurity < 10) {
				setProduct(false);
				setCollab(false);
				setSecurity(true);
			}
			if (topCollab && topCollab < 10) {
				setProduct(false);
				setCollab(true);
				setSecurity(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="nav"
			className={`w-full top-0 left-0 z-[3] transition ease-in duration-200 relative`}>
			{isSticky && (
				<div
					className={`w-full px-12 ${
						isFixed ? "fixed" : "sticky"
					} py-3 bg-[#0d1117] shadow-slate-950 shadow-md top-0 left-0`}>
					<div className="w-full flex items-center max-lg:flex-col relative">
						<button
							title="_"
							onClick={() => setSmallNav(!smallNav)}
							className="lg:hidden absolute right-12 top-2">
							{/* стрелка вниз / вверх */}
							<svg
								aria-hidden="true"
								height="24"
								fill="currentColor"
								viewBox="0 0 24 24"
								width="24"
								className={`text-white ${smallNav ? "hidden" : ""}`}>
								<path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z" />
							</svg>
							<svg
								aria-hidden="true"
								height="24"
								fill="currentColor"
								viewBox="0 0 24 24"
								width="24"
								className={`text-white ${smallNav ? "" : "hidden"}`}>
								<path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z" />
							</svg>
						</button>

						<div className="flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4 text-white">
							<Link
								href="#productivity"
								onClick={() => setSmallNav(false)}
								onMouseEnter={() => setProduct1(true)}
								onMouseLeave={() => setProduct1(false)}
								className={`max-lg:pt-2 ${
									product1 ? "lg:text-white" : ""
								} ${product || smallNav ? "lg:text-white max-lg:pb-6" : "max-lg:hidden"}`}>
								Производительность
								<div
									className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ${
										product1 || product ? "scale-100" : ""
									}`}
								/>
							</Link>

							<Link
								href="#collaboration"
								onClick={() => setSmallNav(false)}
								onMouseEnter={() => setCollab1(true)}
								onMouseLeave={() => setCollab1(false)}
								className={`max-lg:pt-2 ${
									collab1 ? "lg:text-white" : ""
								} ${collab || smallNav ? "lg:text-white max-lg:pb-6" : "max-lg:hidden"}`}>
								Vocal FX
								<div
									className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ${
										collab1 || collab ? "scale-100" : ""
									}`}
								/>
							</Link>

							<Link
								href="#security"
								onClick={() => setSmallNav(false)}
								onMouseEnter={() => setSecurity1(true)}
								onMouseLeave={() => setSecurity1(false)}
								className={`max-lg:pt-2 ${
									security1 ? "lg:text-white" : ""
								} ${security || smallNav ? "lg:text-white" : "max-lg:hidden"}`}>
								Совместная работа
								<div
									className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ${
										security1 || security ? "scale-100" : ""
									}`}
								/>
							</Link>
						</div>

						<div
							className={`lg:ml-5 flex items-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5 ${
								smallNav ? "" : "max-lg:hidden"
							}`}>
							<Link
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
								href=""
								className="flex items-center max-lg:w-full text-white font-semibold justify-center space-x-2 text-base border-[1px] border-neutral-500 px-3 py-3 rounded-md">
								Начать бесплатный пробный период
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`ml-2 transition ${
										hovered ? "translate-x-0" : "-translate-x-1"
									}`}
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none">
									<path
										fill="currentColor"
										d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L10.47 8.53l-4.25 4.25a.75.75 0 1 0 1.06 1.06l4.78-4.78a.75.75 0 0 0 0-1.06L7.28 3.22Z"
									/>
									<path
										stroke="currentColor"
										d="M1.75 8H11"
										strokeWidth="1.5"
										strokeLinecap="round"
										className={hovered ? "opacity-100" : "opacity-0"}
									/>
								</svg>
							</Link>

							<Link
								onMouseEnter={() => setHovered1(true)}
								onMouseLeave={() => setHovered1(false)}
								href=""
								className="flex items-center max-lg:w-full bg-white font-semibold px-3 py-3 justify-center rounded-md text-base">
								Регистрация в NoirSound
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`ml-2 transition ${
										hovered1 ? "translate-x-0" : "-translate-x-1"
									}`}
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none">
									<path
										fill="currentColor"
										d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L10.47 8.53l-4.25 4.25a.75.75 0 1 0 1.06 1.06l4.78-4.78a.75.75 0 0 0 0-1.06L7.28 3.22Z"
									/>
									<path
										stroke="currentColor"
										d="M1.75 8H11"
										strokeWidth="1.5"
										strokeLinecap="round"
										className={hovered1 ? "opacity-100" : "opacity-0"}
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
