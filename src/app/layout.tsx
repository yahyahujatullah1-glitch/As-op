import type { Metadata } from "next";
import { Orbitron, Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AS OP | Gaming Community",
  description: "Join the AS OP Gaming Community and Grand Mobile RP Marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} ${rajdhani.variable}`}>
      <body className="font-inter antialiased bg-background text-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background/90 backdrop-blur-md">
          <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
              {/* Logo in Header */}
              <img src="https://i.ibb.co/CpCfYw2c/AS-OP-Channel-Logo-removebg-preview.png" alt="Logo" className="h-10 w-auto" />
              <h1 className="text-white text-2xl font-orbitron font-bold tracking-widest">AS OP</h1>
            </div>
            <div className="hidden md:flex items-center gap-8 font-rajdhani font-bold uppercase tracking-wider text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Community</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex h-10 px-6 items-center justify-center rounded bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold font-rajdhani tracking-wide transition-all">
                  LOGIN
              </button>
              <button className="h-10 px-6 items-center justify-center rounded bg-primary hover:bg-red-700 text-white text-sm font-bold font-rajdhani tracking-wide transition-all shadow-lg shadow-primary/20">
                  JOIN NOW
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
