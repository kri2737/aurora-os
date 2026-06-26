import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import BentoFeatures from "@/components/BentoFeatures";
import Pricing from "@/components/Pricing";


import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trusted />
      <BentoFeatures />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}