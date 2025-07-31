import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "NoirSound",
	description: "NoirSound аудио редактор",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
