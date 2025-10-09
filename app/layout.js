import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EchoRoots Archive - Preserving Endangered Languages",
  description: "A digital repository for endangered languages, primarily from South India. Academic research project by SRM Institute.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        {/* Background Image */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Images/background.png')",
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="fixed inset-0 z-0 bg-black/20" />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
