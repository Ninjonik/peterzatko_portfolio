"use client";

import React, { useState } from "react";
import { TracingBeam } from "./ui/TracingBeam";
import Link from "next/link";

interface Honor {
	title: string;
	issuer: string;
	date: string;
	association: string;
	description: string[];
	link?: string;
	certificateLink?: string;
	certificateImage?: string;
	type: "award" | "certification";
}

export const Honors = () => {
	const [openDiplomaId, setOpenDiplomaId] = useState<string | null>(null);

	const honors: Honor[] = [
		// Competitive Awards
		{
			title: "🥉 - Slovak National round of Zenit 2024 - Web Developer Competition",
			issuer: "State Institute of Vocational Education",
			date: "Mar 2024",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: [
				"3rd place achieved.",
				"The two-day competition challenged us to build a comprehensive web application for ZenDeliver, a parcel delivery service.",
				"On the first day, we focused on the public-facing side of the website, designing an intuitive landing page to introduce the company and its services. The highlight of the day was developing a complex parcel sending form, ensuring seamless user experience and robust validation.",
				'The second day shifted our focus to the backend. We built a robust administrative panel to efficiently manage parcel information. Additionally, we implemented a virtual terminal for "picking up" parcels and a system to generate professional invoice PDFs.',
			],
			link: "https://zenit.svsbb.sk/public/vysledkova-listina/web-2024.pdf",
			certificateLink: "/img/honors/zenit2024.jpg",
			certificateImage: "/img/honors/zenit2024.jpg",
			type: "award",
		},
		{
			title: "UWDC 2025 - Unofficial Web Developer Competition",
			issuer: "Skills17",
			date: "Apr 2025",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: [
				"Unfortunately the organizers have mistaken my surname for Satko.",
				"Full project on GitHub: https://github.com/Ninjonik/uwdc2025",
			],
			certificateLink: "/img/honors/uwdc.pdf",
			certificateImage: "/img/honors/uwdc.png",
			type: "award",
		},
		{
			title: "🥈 - Network Academy Games 2025 National Round",
			issuer: "NETACAD SK",
			date: "Apr 2025",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: ["Second place in the group category HS3 out of 29 trios."],
			type: "award",
			link: "https://netacad.sk/nag/",
		},
		{
			title: "🏅 - Slovak National round of Zenit 2025 - Web Developer Competition",
			issuer: "State Institute of Vocational Education",
			date: "Mar 2025",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: [
				"4th place achieved.",
				"2 x 4 hours (1 session/day)",
				"Task: Create a real-time web-based game with fully functional lobby system, statistics and the game functionality itself.",
			],
			link: "https://zenit.svsbb.sk/public/vysledkova-listina/programovanie-03-2025.pdf",
			type: "award",
		},
		// Skills & Certifications
		{
			title: "Republican Union of Employers Certificate",
			issuer: "Republican Union of Employers Slovakia",
			date: "May 2025",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: ["Certificate"],
			certificateLink: "/img/honors/ruz.png",
			certificateImage: "/img/honors/ruz.png",
			type: "certification",
		},
		{
			title: "CCNA: Enterprise Networking, Security, and Automation",
			issuer: "Cisco Networking Academy",
			date: "May 2025",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: ["CCNA Certificate"],
			certificateLink: "/img/honors/ccna3.pdf",
			certificateImage: "/img/honors/ccna3.pdf",
			type: "certification",
		},
		{
			title: "CCNA: Switching, Routing, and Wireless Essentials",
			issuer: "Cisco Networking Academy",
			date: "May 2025",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: ["CCNA Certificate"],
			certificateLink: "/img/honors/ccna2.pdf",
			certificateImage: "/img/honors/ccna2.pdf",
			type: "certification",
		},
		{
			title: "CCNA: Introduction to Networks",
			issuer: "Cisco Networking Academy",
			date: "May 2024",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: ["CCNA Certificate"],
			certificateLink: "https://www.credly.com/badges/3213b639-357d-4f05-972d-0669703c4bbb/public_url",
			type: "certification",
		},
		{
			title: "PCAP: Programming Essentials in Python",
			issuer: "Cisco Networking Academy, OpenEDG Python Institute",
			date: "May 2024",
			association: "Ignác Gessay High School of Information Technologies in Tvrdošín",
			description: ["Certificate"],
			certificateLink: "/img/honors/pcap.jpg",
			certificateImage: "/img/honors/pcap.jpg",
			type: "certification",
		},
	];

	const awardsData = honors.filter((honor) => honor.type === "award");
	const certificationsData = honors.filter((honor) => honor.type === "certification");

	const renderHonorItem = (honor: Honor, index: number) => (
		<div key={index} className="mb-12">
			<div className="prose prose-sm dark:prose-invert flex flex-col items-center justify-center">
				<h3 className="text-2xl font-bold tracking-tight text-black dark:text-white">{honor.title}</h3>
				<div className="mb-2 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
					<span>Issued by {honor.issuer}</span>
					<span>•</span>
					<span>{honor.date}</span>
				</div>
				<p className="mb-4 text-sm italic text-gray-600 dark:text-gray-400">Associated with {honor.association}</p>

				<div className="mt-4 space-y-2">
					{honor.description.map((desc, i) => (
						<p key={i} className="text-gray-800 dark:text-gray-200">
							{desc}
						</p>
					))}
				</div>

				<div className="mt-4 flex gap-4">
					{honor.link && (
						<Link
							href={honor.link}
							target="_blank"
							className="flex flex-wrap items-center justify-center font-medium text-blue-600 hover:underline dark:text-blue-400"
						>
							View Results
						</Link>
					)}
					{honor.certificateLink && (
						<Link
							href={honor.certificateLink}
							target="_blank"
							className="flex flex-wrap items-center justify-center font-medium text-blue-600 hover:underline dark:text-blue-400"
						>
							View Certificate
						</Link>
					)}
				</div>
			</div>
		</div>
	);

	return (
		<section id="honors" className="w-full bg-gradient-to-b from-white to-slate-100 px-4 py-20 dark:from-slate-950 dark:to-slate-900">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-center text-5xl font-bold text-black text-transparent dark:text-white">
					Honors & Achievements
				</h2>

				<div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Competitive Awards Column */}
					<div className="col-span-1">
						<TracingBeam className="px-6">
							<div className="relative mx-auto max-w-xl pt-4 antialiased">
								<h3 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-center text-3xl font-bold text-transparent">
									Competitive Awards
								</h3>
								{awardsData.map((honor, index) => renderHonorItem(honor, index))}
							</div>
						</TracingBeam>
					</div>

					{/* Skills & Certifications Column */}
					<div className="col-span-1">
						<TracingBeam className="px-6">
							<div className="relative mx-auto max-w-xl pt-4 antialiased">
								<h3 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-center text-3xl font-bold text-transparent">
									Skills & Certifications
								</h3>
								{certificationsData.map((honor, index) => renderHonorItem(honor, index))}
							</div>
						</TracingBeam>
					</div>
				</div>
			</div>
		</section>
	);
};
