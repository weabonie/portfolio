import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TerminalProvider } from "@/components/bootContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "weab's portfolio shell",
	description: "duc nguyen's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<TerminalProvider>
					{children}

					<section className="invisible lg:visible font-light text-gray-400 text-base absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
						<div>weab's portfolio shell [ver 0.1]</div>
						<div>(c) 2025 Weabonie</div>
					</section>
				</TerminalProvider>
			</body>
		</html>
	);
}
