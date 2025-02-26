import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MusicIcon, TrendingUpIcon } from "lucide-react";
import { SiTelegram } from "react-icons/si";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Musicians with
            <span className="text-primary"> ROCKCOIN</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The first cryptocurrency designed to empower musicians and connect them with fans.
            Our price grows with every beat sold.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="#musicians">
                <MusicIcon className="w-5 h-5" />
                Join as Musician
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#price-tracker">
                <TrendingUpIcon className="w-5 h-5" />
                View Price Chart
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a 
                href="https://t.me/rockcoin123" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTelegram className="w-5 h-5" />
                Join Community
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}