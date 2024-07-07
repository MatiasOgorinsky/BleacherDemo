import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Bleacher report's demo app",
  description: "Demo application for bleacher report",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className={`flex h-screen flex-col  `}>
          <div className={`${bebas.className}`}>
            <Header />
            <main className="flex-1">{children}</main>
          </div>
          <div className={`${inter.className}`}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
