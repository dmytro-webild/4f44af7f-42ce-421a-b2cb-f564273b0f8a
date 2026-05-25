import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'LeadGenius | High-Converting Pay-Per-Lead Agency',
  description: 'Scale your sales with verified, high-intent leads. Our pay-per-lead marketing agency guarantees ROI through data-driven funnel optimization.',
  openGraph: {
    "title": "LeadGenius | High-Converting Pay-Per-Lead Agency",
    "description": "Scale your sales with verified, high-intent leads. Our pay-per-lead marketing agency guarantees ROI through data-driven funnel optimization.",
    "siteName": "LeadGenius",
    "type": "website"
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
