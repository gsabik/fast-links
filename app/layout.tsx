import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { LinksProvider } from "@/context/LinksContext";

export const metadata: Metadata = {
  title: "Fastlinks",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<LinksProvider>
						<header>
							<NavBar/>
						</header>
						{children}
					</LinksProvider>
				</ThemeProvider>
			</body>
    </html>
  );
}

export default RootLayout;