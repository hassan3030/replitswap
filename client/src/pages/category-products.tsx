import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Star, Heart, Repeat } from "lucide-react";
import { fadeIn, staggeredGrid, gridItem, premiumCardHover } from "@/lib/animations";

export default function CategoryProducts() {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 gradient-text capitalize"
        >
          {category} Products
        </motion.h1>
        
        <motion.div
          variants={staggeredGrid(0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div key={index} variants={gridItem}>
              <motion.div variants={premiumCardHover} whileHover="hover">
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${1600000000000 + index * 100000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400`}
                      alt="Product"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Product {index + 1}</h3>
                    <p className="text-primary font-bold">${(index + 1) * 100}</p>
                    <Button className="w-full mt-4">
                      <Repeat className="w-4 h-4 mr-2" />
                      Make Swap
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}