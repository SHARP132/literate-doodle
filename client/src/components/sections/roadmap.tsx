import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const roadmapItems = [
  {
    quarter: "Q2 2024",
    title: "Launch Phase",
    items: [
      "Initial ROCKCOIN release",
      "Community building",
      "Website launch"
    ]
  },
  {
    quarter: "Q3 2024",
    title: "Platform Development",
    items: [
      "Musician onboarding",
      "Beat marketplace beta",
      "Mobile app development"
    ]
  },
  {
    quarter: "Q4 2024",
    title: "Ecosystem Growth",
    items: [
      "Exchange listings",
      "Partnership announcements",
      "Community events"
    ]
  },
  {
    quarter: "Q1 2025",
    title: "Expansion",
    items: [
      "Global marketing campaign",
      "Advanced features rollout",
      "Major partnerships"
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 px-4 bg-accent/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Project Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize music industry support through cryptocurrency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="text-primary font-semibold mb-2">{item.quarter}</div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-muted-foreground">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
