import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/global/Header";

const inter = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Arab Royal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar"  dir="rtl" className="dark:bg-[#464D43]">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Toaster />
        <Header />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
