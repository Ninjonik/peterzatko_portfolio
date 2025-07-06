"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/HeroParallax";

export function HeroShowcase() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "Aeron Racing",
		link: "https://areonracing.com/",
		thumbnail: "/img/projects/areonracing.png",
	},
	{
		title: "Planiosa",
		link: "https://planiosa.sk/",
		thumbnail: "/img/projects/planiosa1.png",
	},
	{
		title: "HOI4Intel",
		link: "https://hoi.igportals.eu/",
		thumbnail: "/img/projects/hoi4intel.png",
	},
	{
		title: "BestCamp Orava",
		link: "https://bestcamporava.sk/",
		thumbnail: "/img/projects/bestcamporava1.png",
	},
	{
		title: "Wuilting",
		link: "https://wuilting.vercel.app/",
		thumbnail: "/img/projects/wuilting.png",
	},
	{
		title: "Nexly",
		link: "https://nexly.igportals.eu/",
		thumbnail: "/img/projects/nexly1.png",
	},
	{
		title: "Planiosa",
		link: "https://planiosa.sk/",
		thumbnail: "/img/projects/planiosa2.png",
	},
	{
		title: "HOI4Intel",
		link: "https://hoi.igportals.eu/",
		thumbnail: "/img/projects/hoi4intel2.png",
	},
	{
		title: "BestCamp Orava",
		link: "https://bestcamporava.sk/",
		thumbnail: "/img/projects/bestcamporava2.png",
	},
	{
		title: "Nexly",
		link: "https://nexly.igportals.eu/",
		thumbnail: "/img/projects/nexly2.png",
	},
	{
		title: "Planiosa",
		link: "https://planiosa.sk/",
		thumbnail: "/img/projects/planiosa3.png",
	},
	{
		title: "HOI4Intel",
		link: "https://hoi.igportals.eu/",
		thumbnail: "/img/projects/hoi4intel3.png",
	},
	{
		title: "BestCamp Orava",
		link: "https://bestcamporava.sk/",
		thumbnail: "/img/projects/bestcamporava3.png",
	},
	{
		title: "Planiosa",
		link: "https://planiosa.sk/",
		thumbnail: "/img/projects/planiosa4.png",
	},
	{
		title: "Uptime Kuma",
		link: "https://status.igportals.eu/status/hoi4intel",
		thumbnail: "/img/projects/status.png",
	},
];
