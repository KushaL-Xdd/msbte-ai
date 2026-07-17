"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Cable,
  Calculator,
  Code2,
  Database,
  Zap,
  Wrench,
  Network,
} from "lucide-react";

const subjects = [
  {
    title: "Engineering Mathematics",
    icon: Calculator,
    semester: "Semester 1",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Basic Electronics",
    icon: Cpu,
    semester: "Semester 2",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Programming in C",
    icon: Code2,
    semester: "Semester 2",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Data Structures",
    icon: Database,
    semester: "Semester 3",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Computer Networks",
    icon: Network,
    semester: "Semester 4",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Operating System",
    icon: Zap,
    semester: "Semester 4",
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Microcontroller",
    icon: Cable,
    semester: "Semester 5",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Industrial Training",
    icon: Wrench,
    semester: "Semester 6",
    color: "from-sky-500 to-blue-500",
  },
];

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="relative overflow-hidden bg-zinc-950 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
            K Scheme Subjects
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Learn Every
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Diploma Subject
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            AI Tutor, Notes, PYQs and Quizzes available
            for every MSBTE subject.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {subjects.map((subject, index) => {

            const Icon = subject.icon;

            return (

              <motion.div
                key={subject.title}
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
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
                />

                <div
                  className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${subject.color} p-4 text-white`}
                >
                  <Icon size={30} />
                </div>

                <div className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-blue-300">
                  {subject.semester}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {subject.title}
                </h3>

                <ul className="mt-6 space-y-3 text-zinc-400">

                  <li>✔ AI Tutor</li>

                  <li>✔ Smart Notes</li>

                  <li>✔ Previous Papers</li>

                  <li>✔ Quiz Generator</li>

                </ul>

                <button
                  className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore Subject
                </button>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}