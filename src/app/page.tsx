import FeaturedSecton from "@/components/FeaturedSecton";
import HeroSection from "@/components/HeroSection";
import InformationSection from "@/components/InformationSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSecton/>
      <InformationSection/>
      <Testimonials/>
    </main>
  );
}
