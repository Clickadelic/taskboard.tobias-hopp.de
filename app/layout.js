import "./globals.css";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
	title: "Toby&apos;s Dashboard",
	description: "Analytics, Uptimes, Todos"
};

export default function RootLayout({ children }) {
	return (
		<html lang="de">
			<body className={open_sans.className}>{children}</body>
		</html>
	);
}
