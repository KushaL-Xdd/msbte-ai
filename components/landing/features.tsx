"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileText,
  Sparkles,
  BookOpen,
  CalendarClock,
  ChartColumnIncreasing,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Tutor",
    description:
      "Ask any MSBTE question and receive step-by-step explanations instantly.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description:
      "Generate concise chapter notes and revision sheets within seconds.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Previous Year Papers",
    description:
      "Access solved PYQs and discover frequently asked questions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "AI Quiz Generator",
    description:
      "Practice unlimited AI-generated quizzes based on your syllabus.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: CalendarClock,
    title: "Study Planner",
    description:
      "Create personalized daily study schedules and stay consistent.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Performance Analytics",
    description:
      "Track learning progress with detailed statistics and insights.",
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: MessageSquare,
    title: "24×7 AI Chat",
    description:
      "Your personal AI assistant is available anytime for instant help.",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Verified Content",
    description:
      "All study material follows the latest MSBTE K Scheme syllabus.",
    color: "from-teal-500 to-green-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black py-28"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
            Powerful Features
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              To Score Better
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            MSBTE AI combines Artificial Intelligence,
            smart learning and premium study tools into
            one beautiful platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
                />

                <div
                  className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-xl`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>

                <motion.div
                  whileHover={{ x: 6 }}
                  className="mt-8 flex items-center gap-2 font-medium text-blue-400"
                >
                  Learn More →

                </motion.div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}