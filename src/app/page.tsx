import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Materials from "@/components/Materials";
import Lifestyle from "@/components/Lifestyle";
import CustomDesignForm from "@/components/CustomDesignForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import CouplesStories from "@/components/CouplesStories";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-licht-light text-licht-dark min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Materials />
      <Lifestyle />
      <CustomDesignForm />
      <WhyChooseUs />
      <CouplesStories />
      <FinalCTA />
      <Footer />
    </main>
  );
}
