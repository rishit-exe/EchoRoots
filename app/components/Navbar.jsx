"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "../utils/cn";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Map", path: "/map" },
    { name: "Resources", path: "/resources" },
    { name: "Researchers", path: "/researchers" }
  ];

  return (
    <>
      {/* Logo and EchoRoots text in top left corner */}
      <div className="fixed top-4 left-4 z-50 flex items-start space-x-4">
        <Image
          src="/Images/Logo.png"
          alt="EchoRoots Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <h1 className="text-white text-6xl font-bold mt-6" style={{ fontFamily: 'Times New Roman, serif' }}>
          EchoRoots
        </h1>
      </div>

      {/* Navigation bar - unchanged */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/20 px-8 py-4 shadow-lg">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-6 py-2 rounded-full font-medium text-lg transition-all duration-300 ease-in-out",
                  "hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md hover:scale-105",
                  "active:scale-95",
                  pathname === item.path
                    ? "bg-white/20 text-white shadow-inner"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}