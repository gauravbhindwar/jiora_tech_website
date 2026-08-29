import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { themeScript } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jioratech.com"),
  title: {
    default: "Jiora Tech — Building Intelligent Software for the Future",
    template: "%s · Jiora Tech",
  },
  description:
    "We build AI-powered software, SaaS platforms, intelligent automations, and secure cloud solutions that help businesses solve complex problems and turn ideas into scalable digital products.",
  keywords: ["AI software development", "SaaS development", "business automation", "cloud infrastructure", "application security", "software engineering", "Jiora Tech"],
  openGraph: {
    title: "Jiora Tech — Building Intelligent Software for the Future",
    description: "Software · AI · SaaS · Automation · Cloud · Security. We build what comes next.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans antialiased bg-[var(--bg)] text-[var(--fg)]`}>{children}</body>
    </html>
  );
}
