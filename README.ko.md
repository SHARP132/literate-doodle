
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Music2, 
  TrendingUp, 
  Users, 
  Coins,
  Check,
  Music as MusicIcon
} from "lucide-react";
import { SiTelegram } from "react-icons/si";

export default function Home() {
  const features = [
    {
      icon: <Music2 className="w-12 h-12 text-primary" />,
      title: "Amazing Music",
      description: "High quality beats and tracks"
    },
    {
      icon: <Coins className="w-12 h-12 text-primary" />,
      title: "Smart Payments",
      description: "Secure and fast transactions"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Growing Value",
      description: "Increasing community worth"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Active Community",
      description: "Join thousands of music lovers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <MusicIcon className="w-6 h-6 text-primary" />
            MusicApp
          </motion.a>

          <motion.div 
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </motion.div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to the Future of Music
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of musicians and music lovers. Create, share, and earn.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <MusicIcon className="w-5 h-5" />
                  Start Creating
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <TrendingUp className="w-5 h-5" />
                  View Stats
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Features</h2>
              <p className="text-muted-foreground">Discover what makes us special</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-card border"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="text-muted-foreground mb-8">
                  Connect with other musicians, share your work, and grow together.
                </p>
                
                <Button size="lg" className="gap-2">
                  <SiTelegram className="w-5 h-5" />
                  Join Telegram
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg bg-muted"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We're here to help!
              </p>
              <Button size="lg">Contact Us</Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 MusicApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}import { motion } from "framer-motion";
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
