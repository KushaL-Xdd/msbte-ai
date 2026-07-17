export default function FAQ(){return <section>FAQ</section>}
"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MSBTE AI?",
    answer:
      "MSBTE AI is an AI-powered learning platform designed for Maharashtra State Board of Technical Education (MSBTE) Diploma students. It provides AI tutoring, smart notes, PYQs, quizzes, study planning, and performance tracking in one place.",
  },
  {
    question: "Is MSBTE AI free?",
    answer:
      "Yes. Core learning features are free for students. Premium AI features may be introduced in future versions.",
  },
  {
    question: "Which branches are supported?",
    answer:
      "Computer Engineering, Information Technology, Electronics, Electrical, Mechanical, Civil, AI & ML and additional MSBTE diploma branches.",
  },
  {
    question: "Can I chat with AI anytime?",
    answer:
      "Yes. Marvin AI Tutor is available 24×7 to answer questions, explain concepts, solve numerical problems and generate study material.",
  },
  {
    question: "Will previous year papers be available?",
    answer:
      "Yes. Subject-wise and semester-wise PYQs with AI explanations and important question prediction will be available.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes. MSBTE AI is fully responsive and works on mobile phones, tablets and desktops.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-zinc-950 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Got Questions?
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Everything you need to know about MSBTE AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-2xl"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 px-5"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-base leading-8 text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}