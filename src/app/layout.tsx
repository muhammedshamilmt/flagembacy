import type { Metadata } from "next";
import { Oswald, Petit_Formal_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const petitFormalScript = Petit_Formal_Script({
  subsets: ["latin"],
  variable: "--font-petit-formal-script",
  weight: "400",
});

const seasonMix = localFont({
  src: [
    {
      path: "../../public/fonts/SeasonMix-TRIAL-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SeasonMix-TRIAL-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-season-mix",
});

const seasonSans = localFont({
  src: "../../public/fonts/SeasonSans-TRIAL-SemiBold.ttf",
  variable: "--font-season-sans",
  weight: "600",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Flag Embassy",
  description: "A community of faith, purpose, and kingdom advancement.",
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md font-season-mix">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center bg-foreground text-background">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Flag Embassy</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/vision" className="hover:text-foreground transition-colors">Vision</Link>
          <Link href="/ministries" className="hover:text-foreground transition-colors">Ministries</Link>
          <Link href="/media" className="hover:text-foreground transition-colors">Media</Link>
          <Link href="/connect" className="hover:text-foreground transition-colors">Connect</Link>
          <Link href="/give" className="hover:text-foreground transition-colors">Give</Link>
          
          <div className="h-4 w-px bg-foreground/20 ml-2"></div>
          
          <Link href="/connect" className="ml-2 inline-flex h-9 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
            Plan Your Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${petitFormalScript.variable} ${seasonMix.variable} ${seasonSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background font-season-mix">
        <Navbar />
        <div className="flex-1 flex flex-col relative">
          {children}
        </div>
      </body>
    </html>
  );
}
