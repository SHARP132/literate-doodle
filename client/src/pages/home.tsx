import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Musicians from "@/components/sections/musicians";
import PriceTracker from "@/components/sections/price-tracker";
import Roadmap from "@/components/sections/roadmap";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Musicians />
        <PriceTracker />
        <Roadmap />
        <Contact />
      </main>
    </div>
  );
}
