import type { Metadata } from "next";
import "./globals.css";
import PublicFooter from "@resume/layouts/PublicFooter/PublicFooter";
import PublicHeader from "@resume/layouts/PublicHeader/PublicHeader";

export const metadata: Metadata = {
  title: "Lucky Resume",
  description: "My Resume with website view",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white10">
        <PublicHeader />
        {children}
        <PublicFooter />
      </body>
    </html>
  );
}
