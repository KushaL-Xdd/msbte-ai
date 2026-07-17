"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, BrainCircuit, Trophy } from "lucide-react";

const stats = [
  {
    value: "25K+",
    label: "Students Learning",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    value: "500+",
    label: "Study Notes",
    icon: BookOpen,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    value: "24/7",
    label: "AI Tutor Available",
    icon: BrainCircuit,
    color: "from-emerald-500 to-green-400",
  },
  {
    value: "95%",
    label: "Success Rate",
    icon: Trophy,
    color: "from-orange-500 to-yellow-400",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.15),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Trusted by Diploma Students
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Numbers that Speak
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            MSBTE AI combines Artificial Intelligence with
            modern education to help diploma students learn
            faster, practice smarter and score better.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.label}
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
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
                />

                <div
                  className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-4 text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.label}
                </p>

                <div className="mt-8 h-1 w-full rounded-full bg-zinc-800 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      delay: index * .2,
                    }}
                    className={`h-full bg-gradient-to-r ${item.color}`}
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}