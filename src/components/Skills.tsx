const SkillComponent = ({ skillsArray }: any) => {
	return (
		<div className="flex flex-col md:grid md:grid-cols-6 gap-8">
			{skillsArray.map((skill: any, index: number) => (
				<a key={index} href={skill.url} className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
					<img className="h-40 w-40" src={`/img/logos/${skill.logo}`} alt={skill.name} />
					<span>{skill.name}</span>
				</a>
			))}
		</div>
	);
};

const skillsArray = [
	{ name: "JavaScript", url: "https://www.javascript.com/", logo: "jslogo.png" },
	{ name: "TypeScript", url: "https://www.typescriptlang.org/", logo: "tslogo.png" },
	{ name: "Node.js", url: "https://nodejs.org/en", logo: "nodejslogo.png" },
	{ name: "Next.js", url: "https://nextjs.org/", logo: "nextjslogo.png" },
	{ name: "PHP", url: "https://www.php.net/", logo: "phplogo.png" },
	{ name: "Laravel", url: "https://laravel.com/", logo: "laravellogo.png" },
	{ name: "Python", url: "https://www.python.org/", logo: "pythonlogo.png" },
	{ name: "Discord.py", url: "https://discordpy.readthedocs.io/en/stable/", logo: "discordpylogo.png" },
	{ name: "Git", url: "https://git-scm.com/", logo: "gitlogo.png" },
	{ name: "Github", url: "https://github.com", logo: "githublogo.png" },
	{ name: "MySQL", url: "https://www.mysql.com/", logo: "mysql.svg" },
	{ name: "MongoDB", url: "https://www.mongodb.com/", logo: "mongodblogo.webp" },
	{ name: "Tauri", url: "https://tauri.app/", logo: "tauri.svg" },
	{ name: "Flutter", url: "https://flutter.dev/", logo: "flutter.png" },
	{ name: "Lua", url: "https://www.lua.org/", logo: "lua.png" },
	{ name: "Luau", url: "https://luau-lang.org/", logo: "luau.png" },
	{ name: "Roblox Studio", url: "https://create.roblox.com/", logo: "robloxstudio.png" }
];


export const Skills = () => {
	return (
		<section className="w-full min-h-screen dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center p-16 my-8">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
				I am a Developer <br /> with A Very Particular Set of Skills <br />🧰✏️📐
			</p>

			<SkillComponent skillsArray={skillsArray} />
		</section>
	);
};