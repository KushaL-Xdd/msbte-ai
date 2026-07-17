"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-36 pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
              <Sparkles size={16} />
              AI Powered Diploma Learning
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
              Learn
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Smarter
              </span>
              with AI
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              MSBTE AI helps diploma students study faster using AI Tutor,
              Notes, PYQs, Quiz Generator and Smart Study Planner.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/10"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  24/7
                </h2>
                <p className="text-zinc-500">
                  AI Tutor
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  150+
                </h2>
                <p className="text-zinc-500">
                  Study Resources
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  100%
                </h2>
                <p className="text-zinc-500">
                  Free Learning
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-blue-600 p-4">
                  <BrainCircuit size={28} className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Marvin AI
                  </h3>

                  <p className="text-zinc-400">
                    Your Personal AI Study Assistant
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <Feature
                  icon={<BrainCircuit size={22} />}
                  title="AI Tutor"
                  desc="Ask any diploma question instantly."
                />

                <Feature
                  icon={<BookOpen size={22} />}
                  title="Smart Notes"
                  desc="Generate notes in seconds."
                />

                <Feature
                  icon={<GraduationCap size={22} />}
                  title="PYQ Analysis"
                  desc="Predict important questions."
                />

                <Feature
                  icon={<Sparkles size={22} />}
                  title="Quiz Generator"
                  desc="Practice chapter-wise quizzes."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-5"
    >
      <div className="rounded-xl bg-blue-600 p-3 text-white">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-white">
          {title}
        </h4>

        <p className="text-sm text-zinc-400">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}