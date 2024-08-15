import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import theme from "tailwindcss/defaultTheme";
import {ThemeProvider} from "@/components/providers/theme-provider";
import ModalProvider from "@/components/providers/modal-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "@/components/ui/sonner";
import {Modal} from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrainDash",
  description: "BrainDash waitlist website :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script strategy='lazyOnload' type="text/javascript" src="./dat.gui.min.js"/>
        <Script strategy='lazyOnload' type="text/javascript" src="./fluids-script.js"/>
      </head>

      <body className={inter.className}>

      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <TooltipProvider>

          <div className={"h-full flex flex-col"}>
            <main className="w-full flex-1">
              {children}
            </main>
          </div>
          <ModalProvider />
          <Toaster/>
        </TooltipProvider>
      </ThemeProvider>

      </body>
    </html>
  );
}
