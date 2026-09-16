import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Roboto_Slab, Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const dmSansHeading = DM_Sans({subsets:['latin'],variable:'--font-heading'});

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "invariant",
  description:
    "Mechanics notes, simulations, and software — Hritujeet Sharma.",
  keywords: ["software engineering", "physics", "simulations", "personal website"],
  creator: "Hritujeet Sharma",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        dmSans.variable,
        dmSansHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#10B981" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
