import { MainBackground } from "@/components/MainBackground";
import ContainerScroll from "@/components/ui/ContainerScroll";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { FlipWords } from "@/components/ui/FlipWords";
import { HeroShowcase } from "@/components/HeroShowcase";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { Skills } from "@/components/Skills";
import { Honors } from "@/components/Honors";
import { WorkExperience } from "@/components/WorkExperience";

const HomePage = () => {
	return (
		<article className={"flex flex-col text-center"}>
			<MainBackground />
			<ContainerScroll
				titleComponent={
					<>
						<h1 className="text-4xl font-semibold text-black dark:text-white">
							Building <br />
							<span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
								<FlipWords words={["modern", "beautiful", "responsive", "customizable", "performant"]} /> websites
							</span>
						</h1>
					</>
				}
			>
				<Image
					src={`/img/projects/planiosa1.png`}
					alt="hero"
					height={720}
					width={1400}
					className="object-fit mx-auto h-full rounded-2xl object-center"
					draggable={false}
				/>
			</ContainerScroll>
			<div className="mx-auto mb-16 grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
				<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]" className="">
					<div className="max-w-xs">
						<h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">About Me</h2>
						<p className="mt-4 text-left text-base/6 text-neutral-200">
							Hello there! 👋 My name is Peter Zaťko and I am a local 🇸🇰 Slovak developer with a passion for creating modern, beautiful,
							responsive, customizable, performant and meticulously crafted websites. When I'm not coding, you can find me playing video games,
							learning about fictional worlds, hanging out with friends, enjoying the moment or travelling all accross my beautiful homeland of
							Slovakia.
						</p>
					</div>
					<Image
						src="/img/personal1.jpg"
						width={300}
						height={1000}
						alt="linear demo image"
						className="absolute -bottom-10 -right-2 rounded-2xl bg-red-500 object-center grayscale filter"
					/>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 min-h-[300px]">
					<h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
						My Skills
					</h2>
					<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
						My primary focus is set on web development. I have gained a lot of experience in various frontend and backend technologies and
						frameworks especially in this area. I love to learn about new things and to look for new challenges that can push me forward and
						along the road craft something that people will appreciate and use in their daily lives.
					</p>
				</WobbleCard>
				<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
					<div className="max-w-sm">
						<h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
							My Journey
						</h2>
						<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
							Ever since about 10 years ago, when I first started my journey in web development - by creating web portals for small Minecraft
							communities, I have been eager to learn more and more about the fascinating and endless world of web development. From mastering
							the intricacies of basic web technologies such as HTML and CSS, to creating immersive experiences with JavaScript and putting it
							all together with backend frameworks such as Laravel or PHP, occasionally stumbling across Discord bots or game development.
						</p>
					</div>
					<Image
						src="/img/oldsite.png"
						width={600}
						height={400}
						alt="Backend development demo image"
						className="absolute -bottom-[10%] right-0 rounded-2xl object-center"
					/>
				</WobbleCard>
			</div>

			<HeroShowcase />

			<Skills />

			<WorkExperience />

			<Honors />

			{/*<TopPortfolio />*/}

			{/*			<div className="relative flex h-[40rem] w-full overflow-hidden bg-slate-950 antialiased bg-grid-white/[0.02] md:items-center md:justify-center">
				<Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
				<div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
					<h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
						Crafting Precision Websites <br /> That Deliver Results.
					</h1>
					<p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
						I build meticulously crafted websites that drive results. <br /> Lets turn your online vision into reality.
					</p>
				</div>
			</div>*/}
			{/*			<Lamp />
			<section className={"w-screen bg-slate-950"}>
				<div className={"relative -top-48 flex w-full flex-col items-center justify-center bg-slate-950"}>
					<ContactForm />
				</div>
			</section>*/}

			<Footer />
		</article>
	);
};

export default HomePage;
