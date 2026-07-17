"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Subjects",
    href: "#subjects",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="MSBTE AI"
              width={46}
              height={46}
              priority
            />

            <div>
              <h1 className="text-xl font-bold text-white">
                MSBTE AI
              </h1>

              <p className="text-xs text-zinc-400">
                Learn Smarter
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">

            <button
              onClick={() => setDark(!dark)}
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
            >
              {dark ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <Link
              href="/login"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Get Started

              <ChevronRight size={18} />
            </Link>

          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 lg:hidden"
          >
            {mobileOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

        </div>

        <AnimatePresence>

          {mobileOpen && (

            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col p-6">

                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-4 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.title}
                  </a>
                ))}

                <Link
                  href="/login"
                  className="mt-4 rounded-lg border border-white/10 px-4 py-3 text-center text-white"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="mt-3 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white"
                >
                  Get Started
                </Link>

              </div>
            </motion.div>

          )}

        </AnimatePresence>

      </motion.header>
    </>
  );
}