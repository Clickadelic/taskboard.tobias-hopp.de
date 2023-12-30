import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const headingFont = localFont({
	src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const MarketingPage = () => {
	return (
		<>
			<div className="flex items-center justify-center flex-col">
				<div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
					<h1 className="text-3xl md:text-6xl text-center text-neutral-800">Willkommen</h1>
					<span className={cn("text-sm md:text-xl text-neutral-400 my-8 max-w-xl md:max-w-2xl text-center mx-auto", textFont.className)}>auf</span>
					<h2 className="text-3xl md:text-6xl bg-gradient-to-r from-sky-600 to-rose-600 text-white p-4 rounded-md w-fit mb-6">Toby&apos;s Taskboard</h2>
					<h3 className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xl md:max-w-2xl text-center mx-auto", textFont.className)}>Todo&apos;s, Termine, Tätigkeiten!</h3>
				</div>
			</div>
		</>
	);
};

export default MarketingPage;
