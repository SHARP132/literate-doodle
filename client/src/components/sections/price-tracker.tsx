import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";

const mockPriceData = [
  { date: "Jan", price: 0.001 },
  { date: "Feb", price: 0.002 },
  { date: "Mar", price: 0.003 },
  { date: "Apr", price: 0.0025 },
  { date: "May", price: 0.004 },
  { date: "Jun", price: 0.0045 }
];

const mockBeatsData = [
  { 
    month: "Jan",
    beatstars: 120,
    soundcloud: 85,
    bandcamp: 45
  },
  {
    month: "Feb",
    beatstars: 150,
    soundcloud: 95,
    bandcamp: 60
  },
  {
    month: "Mar",
    beatstars: 180,
    soundcloud: 110,
    bandcamp: 75
  },
  {
    month: "Apr",
    beatstars: 200,
    soundcloud: 130,
    bandcamp: 90
  },
  {
    month: "May",
    beatstars: 250,
    soundcloud: 160,
    bandcamp: 110
  },
  {
    month: "Jun",
    beatstars: 300,
    soundcloud: 190,
    bandcamp: 140
  }
];

export default function PriceTracker() {
  return (
    <section id="price-tracker" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>ROCKCOIN Price Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockPriceData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Beat Sales Across Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockBeatsData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="beatstars" name="Beatstars" fill="hsl(var(--primary))" />
                    <Bar dataKey="soundcloud" name="SoundCloud" fill="hsl(var(--secondary))" />
                    <Bar dataKey="bandcamp" name="Bandcamp" fill="hsl(var(--accent))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}