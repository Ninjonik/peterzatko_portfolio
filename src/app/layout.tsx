import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: "Ninjonik",
		template: "%s | Superior Software Solutions",
	},
	description: "Passionate Software Developer && Designer.",
	icons: {
		icon: "/img/logos/iglogo.png",
	},
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
		<link rel="icon" href="/img/logos/iglogo.png" sizes="any" />
		<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
		</html>
	);
};

export default RootLayout;
