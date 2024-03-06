import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

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
					<header>
						<NavBar/>
					</header>
					{children}
				</ThemeProvider>
			</body>
    </html>
  );
}

export default RootLayout;