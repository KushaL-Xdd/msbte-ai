"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Patil",
    college: "Government Polytechnic",
    branch: "Computer Engineering",
    rating: 5,
    review:
      "MSBTE AI helped me prepare for exams in half the time. The AI Tutor explains concepts much better than YouTube videos.",
  },
  {
    name: "Sneha More",
    college: "Government Polytechnic",
    branch: "Information Technology",
    rating: 5,
    review:
      "The Notes and PYQs are amazing. I scored much higher after practicing with the AI-generated quizzes.",
  },
  {
    name: "Rohan Jadhav",
    college: "MSBTE Student",
    branch: "Electronics",
    rating: 5,
    review:
      "The Study Planner keeps me on track every day. Everything I need is available in one platform.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Students Love
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              MSBTE AI
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Thousands of diploma students are already learning smarter with AI.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((student, index) => (

            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

              <Quote
                size={40}
                className="mb-8 text-blue-500"
              />

              <div className="mb-5 flex gap-1">

                {Array.from({ length: student.rating }).map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                ))}

              </div>

              <p className="leading-8 text-zinc-300">
                "{student.review}"
              </p>

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white">
                  {student.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    {student.name}
                  </h4>

                  <p className="text-sm text-zinc-400">
                    {student.branch}
                  </p>

                  <p className="text-xs text-zinc-500">
                    {student.college}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}