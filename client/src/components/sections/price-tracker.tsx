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
  { month: "Jan", beatstars: 45, soundcloud: 30, bandcamp: 25 },
  { month: "Feb", beatstars: 52, soundcloud: 34, bandcamp: 28 },
  { month: "Mar", beatstars: 48, soundcloud: 38, bandcamp: 32 },
  { month: "Apr", beatstars: 55, soundcloud: 42, bandcamp: 35 },
  { month: "May", beatstars: 59, soundcloud: 45, bandcamp: 38 },
  { month: "Jun", beatstars: 65, soundcloud: 48, bandcamp: 42 }
];

export default function PriceTracker() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Token Price History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockPriceData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
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
              <div className="h-[300px]">
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
