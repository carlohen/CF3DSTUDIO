"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/galeria", label: "Galeria" },
  { href: "/sobre", label: "Sobre" },
  { href: "/encomenda", label: "Encomenda" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-background/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.jpg"
            alt="CF 3D Studio Logo"
            width={60}
            height={60}
            className="w-10 h-10 object-contain rounded-lg shadow-2xl"
          />
          <span className="font-extrabold text-xl tracking-tight hidden sm:block">
            CF <span className="text-primary">3D Studio</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${pathname === link.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-xl border hover:bg-muted transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl border"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-medium ${pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="flex items-center gap-2 mt-4 border rounded-xl px-4 py-2"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              Alternar tema
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
