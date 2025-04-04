import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic"
// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const ClientOnly = dynamic(() => import('@/components/Wrappers/ClientSideOnly'), { ssr: !!false });

// const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ayush Jha | Portfolio",
  description: "Portfolio of Ayush Jha",
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
        // className={inter.className}
      >
        <ClientOnly>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
