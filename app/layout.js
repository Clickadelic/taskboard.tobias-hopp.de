import './globals.css';

export const metadata = {
	title: 'Toby\'s Dashboard',
	description: 'Analytics, Uptimes, Todos',
};

export default function RootLayout({ children }) {
	
	return (
		<html lang="de">
			<body>
				{children}
			</body>
		</html>
	)
}
