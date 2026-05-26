import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Fredoka } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['400', '500', '600', '700'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OATFUEL — Naturalne Mleka Owsiane | Napędź Swój Dzień",
  description: "Czyste składniki, wyraziste smaki — stworzone dla ludzi, którzy chcą wycisnąć więcej z każdego łyka. Spróbuj OATFUEL!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, fredoka.variable)}
    >
      <body className="min-h-full flex flex-col bg-background wavy-bg selection:bg-oat-yellow selection:text-black">
        <Navbar />
        <main className="flex-1 w-full relative z-10 flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

