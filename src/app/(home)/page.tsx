import Navbar from "@/components/layout/Navbar";
import { MainBackground } from "@/components/MainBackground";
import ContainerScroll from "@/components/ui/ContainerScroll";
import Image from "next/image";
import { EvervaultCard, Icon } from "@/components/ui/EvervaultCard";
import Footer from "@/components/layout/Footer";
import { FlipWords } from "@/components/ui/FlipWords";
import { HeroShowcase } from "@/components/HeroShowcase";
import { Lamp } from "@/components/ui/Lamp";
import { TopPortfolio } from "@/components/TopPortfolio";
import { Spotlight } from "@/components/ui/Spotlight";
import { ContactForm } from "@/components/ContactForm";
import { Vortex } from "@/components/ui/Vortex";
import { WobbleCard } from "@/components/ui/WobbleCard";

const HomePage = () => {
	return (
		<article className={"flex flex-col"}>
			<Navbar />
			<MainBackground />
			<ContainerScroll
				titleComponent={
					<>
						<h1 className="text-4xl font-semibold text-black dark:text-white">
							Unleash the power of <br />
							<span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
								{" "}
								<FlipWords words={["modern", "beautiful", "responsive", "customizable", "performant"]} /> websites
							</span>
						</h1>
					</>
				}
			>
				<Image
					src={`/img/hoi4intelWebsite.png`}
					alt="hero"
					height={720}
					width={1400}
					className="object-fit mx-auto h-full rounded-2xl object-center"
					draggable={false}
				/>
			</ContainerScroll>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mb-16">
				<WobbleCard
					containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
					className=""
				>
					<div className="max-w-xs">
						<h2
							className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Gippity AI powers the entire universe
						</h2>
						<p className="mt-4 text-left  text-base/6 text-neutral-200">
							With over 100,000 mothly active bot users, Gippity AI is the most
							popular AI platform for developers.
						</p>
					</div>
					<Image
						src="/linear.webp"
						width={500}
						height={500}
						alt="linear demo image"
						className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
					/>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 min-h-[300px]">
					<h2
						className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						No shirt, no shoes, no weapons.
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						If someone yells “stop!”, goes limp, or taps out, the fight is over.
					</p>
				</WobbleCard>
				<WobbleCard
					containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
					<div className="max-w-sm">
						<h2
							className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Signup for blazing-fast cutting-edge state of the art Gippity AI
							wrapper today!
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							With over 100,000 mothly active bot users, Gippity AI is the most
							popular AI platform for developers.
						</p>
					</div>
					<Image
						src="/linear.webp"
						width={500}
						height={500}
						alt="linear demo image"
						className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
					/>
				</WobbleCard>
			</div>
			{/*<section className={"flex flex-col"}>*/}
			{/*	<div className="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">*/}
			{/*		<Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />*/}
			{/*		<Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />*/}
			{/*		<Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />*/}
			{/*		<Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />*/}

			{/*		<EvervaultCard text="hover" />*/}

			{/*		<h2 className="mt-4 text-sm font-light text-black dark:text-white">*/}
			{/*			Hover over this card to reveal an awesome effect. Running out of copy here.*/}
			{/*		</h2>*/}
			{/*		<p className="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">*/}
			{/*			Watch me hover*/}
			{/*		</p>*/}
			{/*	</div>*/}
			{/*</section>*/}
			<HeroShowcase />
			<TopPortfolio />
			<div
				className="h-[40rem] w-full flex md:items-center md:justify-center  bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
				<Spotlight
					className="-top-40 left-0 md:left-60 md:-top-20"
					fill="white"
				/>
				<div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
					<h1
						className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
						Crafting Precision Websites <br /> That Deliver Results.
					</h1>
					<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
						I build meticulously crafted websites that drive results. <br /> Lets turn your online vision into reality.
					</p>
				</div>
			</div>
			<Lamp />
			<section className={"w-screen bg-slate-950"}>
				<div className={"w-full flex flex-col justify-center items-center bg-slate-950 relative -top-48"}>
					<ContactForm />
				</div>
			</section>

			<Footer />
		</article>
	);
};

export default HomePage;
