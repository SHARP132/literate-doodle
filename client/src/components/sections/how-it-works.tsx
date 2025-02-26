import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Music2, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: <Music2 className="w-12 h-12 text-primary" />,
    title: "Musicians Upload Beats",
    description: "Artists can upload and sell their beats directly on our platform"
  },
  {
    icon: <Coins className="w-12 h-12 text-primary" />,
    title: "Fans Buy with ROCKCOIN",
    description: "Supporters use ROCKCOIN to purchase beats and support artists"
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "Price Grows",
    description: "Each beat sale increases ROCKCOIN's value, benefiting all holders"
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Community Growth",
    description: "A growing ecosystem of musicians and supporters"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How ROCKCOIN Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our unique ecosystem connects musicians with fans through cryptocurrency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}