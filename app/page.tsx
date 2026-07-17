import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Stats from "@/components/landing/stats";
import Features from "@/components/landing/features";
import Subjects from "@/components/landing/subjects";
import Testimonials from "@/components/landing/testimonials";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Subjects />

      <Testimonials />

      <FAQ />

      <Footer />
    </main>
  );
}