import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Repeat, Star, X } from "lucide-react";
import { fadeIn, staggeredGrid, gridItem } from "@/lib/animations";

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 gradient-text"
        >
          My Wishlist
        </motion.h1>
        
        <motion.div
          variants={staggeredGrid(0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div key={index} variants={gridItem}>
              <Card className="overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1600000000000 + index * 100000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400`}
                    alt="Wishlist item"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-3 right-3 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Wishlist Item {index + 1}</h3>
                  <p className="text-primary font-bold mb-3">${(index + 1) * 120}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">4.{index + 5}</span>
                  </div>
                  <Button className="w-full">
                    <Repeat className="w-4 h-4 mr-2" />
                    Make Swap
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}