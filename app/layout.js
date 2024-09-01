import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Providers } from "./providers";
import "@mantine/core/styles.css";
import logo from "public/logo.jpg";
import { Footer, Header, PageHeader } from "../components/Index";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AL-BASHIR: Promoting Justice to Eradicate Poverty",
  description:
    "Join us in our mission to create a just world where poverty is a thing of the past.",
  keywords: "justice, poverty, social impact, empowerment, AL-BASHIR",
  robots: "index, follow",
  og: {
    title: "AL-BASHIR: Justice for a Poverty-Free World",
    description: "Join the fight for justice and a world without poverty.",
    type: "website",
    image: logo,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />

        {/* SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />

        {/* Social Media Meta Tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
      </head>
      <body className={inter.className}>
        <Providers>
          <MantineProvider>
            {/* <PageHeader text="OPPOSITE Of POVERTY is JUSTICE! " /> */}

            <Header />
            <NextTopLoader showSpinner={false} color="#e63946" />
            <section style={{ minHeight: "60vh" }}> {children}  <Analytics /></section>
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
