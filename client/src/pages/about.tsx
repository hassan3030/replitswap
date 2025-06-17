import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Repeat, Users, Shield, Globe, Heart, Award } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div variants={fadeIn("up")} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 gradient-text">About DeelDeal</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The revolutionary platform that's changing how people trade and exchange items. 
              Join millions of users who are discovering the joy of sustainable swapping.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div variants={fadeIn("left")}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At DeelDeal, we believe that one person's unused item is another's treasure. 
                Our platform connects people worldwide to trade, swap, and exchange items, 
                promoting sustainability while building community connections.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-2xl text-primary">2M+</h3>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </Card>
                <Card className="p-4 text-center">
                  <Repeat className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-bold text-2xl text-green-500">500K+</h3>
                  <p className="text-sm text-muted-foreground">Successful Swaps</p>
                </Card>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn("right")}>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Community trading"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("up", 0.2)} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose DeelDeal?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Safe & Secure</h3>
                <p className="text-muted-foreground">
                  Advanced verification systems and secure payment processing ensure safe transactions.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Global Community</h3>
                <p className="text-muted-foreground">
                  Connect with traders from around the world and discover unique items from different cultures.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Sustainable Impact</h3>
                <p className="text-muted-foreground">
                  Reduce waste and promote circular economy by giving items a second life.
                </p>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.3)} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of a community that values sustainability, creativity, and meaningful connections. 
                Start your swapping journey today and discover the endless possibilities.
              </p>
              <div className="flex justify-center gap-4">
                <Badge className="px-4 py-2 text-sm">Eco-Friendly</Badge>
                <Badge className="px-4 py-2 text-sm">Community-Driven</Badge>
                <Badge className="px-4 py-2 text-sm">Trusted Platform</Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}