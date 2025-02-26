import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Direct fan support through cryptocurrency",
  "Increased visibility in the music community",
  "Additional revenue stream from beat sales",
  "Grow with the ROCKCOIN ecosystem",
  "Access to dedicated musician features",
  "Connect with a supportive community"
];

export default function Musicians() {
  return (
    <section id="musicians" className="py-16 px-4 bg-accent/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">For Musicians</h2>
            <p className="text-muted-foreground mb-8">
              Join the revolution in music monetization. ROCKCOIN provides a new way
              to connect with fans and earn from your music.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Check className="text-primary" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg">Start Earning with ROCKCOIN</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
            </div>
            <div className="text-6xl">🎸</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
