import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://nirajbyanju.com.np"),
	title: "Niraj | Portofolio",

	description:
		"Niraj, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of Intervyou.",

	author: "Niraj Byanju",
	siteUrl: "https://nirajbyanju.com.np",
	applicationName: "Niraj Byanju",

	keywords: [
		"niraj",
		"neeraj",
		"niraj byanju",
		"niraj",
		"niraj byanju",
		"Niraj Byanju",
		"neeraj",
		"neeraj byanju",
		"neeraj byanju",
		"samriddhi real estate",
		"opportunities sharing",
	],

	openGraph: {
		type: "website",
		url: "https://www.nirajbyanju.com.np",
		title: "Niraj Byanju",
		siteName: "Niraj | Portofolio",
		description: "My name is Niraj, This is my portofolio website.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Niraj Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Niraj Byanju",
	url: "https://www.nirajbyanju.com.np",
	jobTitle: "Full Stack Software Engineer",
	worksFor: [
		{ "@type": "Organization", name: "MGG Software" },
		{ "@type": "Organization", name: "Intervyou" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Universitas Negeri Malang",
	},
	sameAs: [
		"https://github.com/NirajByanju",
		// "https://www.linkedin.com/in/alvalen-shafel-8a081a254/",
		// "https://www.instagram.com/alvalens_/",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
