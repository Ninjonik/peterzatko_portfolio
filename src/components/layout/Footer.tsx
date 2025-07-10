import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
	return (
		<div className="dark bg-slate-950 py-8 text-white">
			<div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
				<div className="flex items-center space-x-4">
					<Link href="https://github.com/Peter Zaťko/" className="text-white hover:text-gray-300" prefetch={false} target={"_blank"}>
						<FiGithub className="h-6 w-6" />
						<span className="sr-only">GitHub</span>
					</Link>
					<Link href="https://www.linkedin.com/in/peter-zatko/" className="text-white hover:text-gray-300" prefetch={false} target={"_blank"}>
						<FiLinkedin className="h-6 w-6" />
						<span className="sr-only">LinkedIn</span>
					</Link>
				</div>
				<p className="mt-4 text-sm text-gray-300 md:mt-0">Made with ❤️ by Peter Zaťko in 2025</p>
			</div>
		</div>
	);
}
