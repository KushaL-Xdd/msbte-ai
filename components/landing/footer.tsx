"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const quickLinks = [
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
    title: "FAQ",
    href: "#faq",
  },
];

const platformLinks = [
  {
    title: "AI Tutor",
    href: "/ai",
  },
  {
    title: "Notes",
    href: "/notes",
  },
  {
    title: "PYQs",
    href: "/pyqs",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="MSBTE AI"
                width={55}
                height={55}
              />

              <div>

                <h2 className="text-2xl font-black text-white">
                  MSBTE AI
                </h2>

                <p className="text-sm text-zinc-400">
                  Learn Smarter with AI
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-zinc-400">
              AI Powered Learning Platform specially built
              for Maharashtra Diploma Students following
              the latest K Scheme syllabus.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600"
              >
                <Github size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-pink-600"
              >
                <Instagram size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-sky-600"
              >
                <Linkedin size={20} />
              </Link>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-blue-400"
                >
                  <ArrowUpRight size={16} />

                  {item.title}

                </Link>

              ))}

            </div>

          </div>

          {/* Platform */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Platform
            </h3>

            <div className="space-y-4">

              {platformLinks.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-blue-400"
                >
                  <ArrowUpRight size={16} />

                  {item.title}

                </Link>

              ))}

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-6 text-zinc-400">
              Receive updates about new notes,
              AI features and important MSBTE announcements.
            </p>

            <div className="space-y-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-blue-500"
              />

              <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500">
                Subscribe
              </button>

            </div>

            <div className="mt-6 flex items-center gap-2 text-zinc-400">

              <Mail size={16} />

              support@msbteai.com

            </div>

          </div>

        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row">

          <p className="text-zinc-500">
            © {new Date().getFullYear()} MSBTE AI.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-zinc-500">

            Built with

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            for Diploma Students

          </div>

        </div>

      </div>

    </footer>
  );
}