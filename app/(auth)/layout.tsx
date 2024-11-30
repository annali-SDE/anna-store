import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'AnnaStore - Admin Auth',
	description: "Admin dashboard to manage Borcelle's data"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
