import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import { LinksProvider } from "@/context/LinksContext";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";
import "./globals.css";

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
						<Toaster/>
					</LinksProvider>
				</ThemeProvider>
			</body>
    </html>
  );
}

export default RootLayout;