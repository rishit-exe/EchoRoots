"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "../utils/cn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Map", path: "/map" },
    { name: "Resources", path: "/resources" },
    { name: "Researchers", path: "/researchers" }
  ];

  return (
    <>
      {/* Logo and EchoRoots text in top left corner */}
      <div className="fixed top-4 left-4 z-50 flex items-center space-x-3">
        <Image
          src="/Images/Logo.png"
          alt="EchoRoots Logo"
          width={64}
          height={64}
          className="object-contain rounded-full"
        />
        {/* Hide large title on small screens */}
        <h1 className="hidden sm:block text-white text-4xl font-bold ml-2" style={{ fontFamily: 'Times New Roman, serif' }}>
          EchoRoots
        </h1>
      </div>

      {/* Desktop navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block">
        <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/20 px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-full font-medium text-base transition-all duration-300 ease-in-out",
                  "hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md hover:scale-105",
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

      {/* Mobile nav: hamburger */}
      <div className="fixed top-6 right-4 z-50 sm:hidden">
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          className="bg-black/20 backdrop-blur-md p-2 rounded-md border border-white/20"
        >
          {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden fixed top-16 right-4 left-4 z-40 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <div className="flex flex-col space-y-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium",
                  pathname === item.path ? "bg-white/10 text-white" : "text-white/90 hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}