import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "next-themes";
import SidebarComponent from "@/app/components/Sidebar";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Project Vision",
  description:
    "Project Vision enlightens individuals to perceive the world's realities beyond prevailing narratives. The project aims to guide people towards understanding that systems of governance and life prescribed by divine guidance are ultimately more just and effective than human-derived systems. ",
  keywords: "dosesofislam,dosesofimaan,Islam,Imaan,Ihsaan",
  manifest: "/web.manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        {/* Google Translate */}
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>

        {/* Google Translate CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
        />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex flex-col min-h-screen bg-background font-sans antialiased">
          <SidebarProvider defaultOpen={true}>
            <SidebarComponent />
            {/* <SidebarTrigger className="ml-2 aspect-square hidden md:block" /> */}
            <main className="flex flex-col w-full">
              <div className="fixed bottom-3 right-3 z-50 bg-black rounded-full p-4 shadow-md border sm:hidden">
                <SidebarTrigger className="aspect-square text-white" />
              </div>

              <div className="z-10">{children}</div>
              {/* <div
                id="google_translate_element"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  right: 16,
                  top: 16,
                  zIndex: 1000,
                  backgroundColor: "#f7f7f7",
                  padding: "12px",
                }}
              ></div> */}
            </main>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
