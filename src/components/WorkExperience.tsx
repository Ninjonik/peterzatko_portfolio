"use client";

import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import { motion } from "framer-motion";

interface WorkExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	description: string[];
	technologies?: string[];
	logo?: string;
}

export const WorkExperience = () => {
	const experiences: WorkExperienceItem[] = [
		{
			title: "Full Stack Engineer",
			company: "AV Systémy, spol. s r.o.",
			location: "Istebné, Zilina, Slovakia · On-site",
			period: "Jun 2025 - Present",
			description: [
				"Migration from Firebase to custom backend infrastructure with Next.js",
				"Development of internal documentation system for automated production line",
				"Implementation of internal order management system",
				"Improved system reliability and performance with modern architecture",
			],
			technologies: ["Next.js", "MongoDB", "JavaScript", "React.js", "Git", "Tailwind CSS", "Docker", "CI/CD", "GitHub"],
			logo: "/img/logos/avsys.jpg",
		},
		{
			title: "Full Stack Engineer",
			company: "PROPOINT s.r.o. (Planiosa)",
			location: "Dolný Kubín, Zilina, Slovakia · Remote",
			period: "Jun 2024 - Present",
			description: [
				"Developing and maintaining the Planiosa platform",
				"Building robust client-facing web applications with Next.js and React",
				"Implementing complex database structures and queries using Prisma",
				"Creating responsive user interfaces with Tailwind CSS and TypeScript",
			],
			technologies: ["Next.js", "TypeScript", "MySQL", "SQLite", "React.js", "JavaScript", "HTML5", "Tailwind CSS", "CI/CD", "GitHub"],
			logo: "/img/logos/planiosa.png",
		},
		{
			title: "Javascript Developer",
			company: "AV Systémy, spol. s r.o.",
			location: "Istebné, Zilina, Slovakia · Hybrid",
			period: "May 2024 - Dec 2024",
			description: [
				"Developed internal documentation system for automated production line",
				"Created and maintained internal order management system",
				"Worked with Firebase and Cloud Firestore for data storage",
				"Built responsive user interfaces with JavaScript and Tailwind CSS",
			],
			technologies: [
				"JavaScript",
				"Firebase",
				"Cloud Firestore",
				"Node.js",
				"MySQL",
				"SQLite",
				"HTML5",
				"CSS",
				"Tailwind CSS",
				"Git",
				"GitHub",
			],
			logo: "/img/logos/avsys.jpg",
		},
		{
			title: "Javascript Developer",
			company: "AV Systémy, spol. s r.o.",
			location: "Istebné, Zilina, Slovakia · On-site",
			period: "May 2023 - Aug 2023",
			description: [
				"Seasonal position developing internal tools",
				"Contributed to documentation systems for production processes",
				"Worked with Firebase and JavaScript to build web applications",
				"Gained experience with version control and collaborative development",
			],
			technologies: [
				"JavaScript",
				"Firebase",
				"Cloud Firestore",
				"Node.js",
				"MySQL",
				"SQLite",
				"HTML5",
				"CSS",
				"Tailwind CSS",
				"Git",
				"GitHub",
			],
			logo: "/img/logos/avsys.jpg",
		},
	];

	return (
		<section id="experience" className="w-full bg-gradient-to-b from-slate-100 to-white px-4 py-20 dark:from-slate-900 dark:to-slate-950">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-center text-5xl font-bold text-black text-transparent dark:text-white">
					Professional Experience
				</h2>

				<TracingBeam className="px-6">
					<div className="relative mx-auto max-w-4xl space-y-12 pt-10 antialiased">
						{experiences.map((experience, index) => (
							<ExperienceCard key={index} experience={experience} isFirst={index === 0} isLast={index === experiences.length - 1} />
						))}
					</div>
				</TracingBeam>
			</div>
		</section>
	);
};

const ExperienceCard = ({ experience, isFirst, isLast }: { experience: WorkExperienceItem; isFirst: boolean; isLast: boolean }) => {
	return (
		<motion.div
			className="relative rounded-xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl dark:bg-slate-800/40 dark:backdrop-blur-sm"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.1 }}
			viewport={{ once: true }}
		>
			{!isLast && <div className="absolute -bottom-12 left-1/2 h-12 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-600 to-transparent" />}

			<div className="flex flex-col gap-6 md:flex-row md:items-start">
				{experience.logo && (
					<div className="flex-shrink-0">
						<div className="h-16 w-16 overflow-hidden rounded-lg bg-transparent p-1 shadow-md">
							<img src={experience.logo} alt={`${experience.company} logo`} className="h-full w-full object-contain" />
						</div>
					</div>
				)}

				<div className="flex-grow">
					<div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
						<div>
							<h3 className="text-2xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
							<div className="flex flex-wrap items-center gap-1 text-gray-600 dark:text-gray-300">
								<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text font-semibold text-transparent">
									{experience.company}
								</span>
								<span>•</span>
								<span>{experience.location}</span>
							</div>
						</div>
						<span className="mt-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 md:mt-0">
							{experience.period}
						</span>
					</div>

					<div className="mt-4">
						<ul className="ml-5 list-disc space-y-2 text-gray-800 dark:text-gray-200">
							{experience.description.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>
					</div>

					{experience.technologies && (
						<div className="mt-5 flex flex-wrap gap-2">
							{experience.technologies.map((tech, idx) => (
								<span
									key={idx}
									className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300"
								>
									{tech}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
};
