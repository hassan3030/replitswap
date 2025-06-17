import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, TrendingUp, MessageSquare, Heart, Plus, Eye } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.h1 variants={fadeIn("up")} className="text-3xl font-bold mb-8">Dashboard</motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div variants={fadeIn("up", 0.1)}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Package className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-muted-foreground">Active Listings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.2)}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-muted-foreground">Completed Swaps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageSquare className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-muted-foreground">New Messages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.4)}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Heart className="h-8 w-8 text-red-500" />
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-muted-foreground">Wishlisted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={fadeIn("left", 0.2)}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Activity
                    <Button size="sm" variant="outline">View All</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                      <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                        <Package className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">New swap offer received</p>
                        <p className="text-sm text-muted-foreground">{index + 1} hours ago</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("right", 0.2)}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Quick Actions
                    <Plus className="h-5 w-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Listing
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Browse Products
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Check Messages
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    View Wishlist
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}