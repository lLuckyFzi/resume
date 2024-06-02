import type { Metadata } from "next";
import "./globals.css";
import PublicFooter from "@resume/layouts/PublicFooter/PublicFooter";
import PublicHeader from "@resume/layouts/PublicHeader/PublicHeader";

export const metadata: Metadata = {
  icons: "/logo/Logo.png",
  title: "Resume",
  description: "My Resume with website view",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icons as string} />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className="bg-white10">
        <PublicHeader />
        {children}
        <PublicFooter />
      </body>
    </html>
  );
}
