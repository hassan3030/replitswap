import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "wouter";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, Heart, Repeat } from "lucide-react";
import { fadeIn, staggeredGrid, gridItem, premiumCardHover } from "@/lib/animations";

export default function SearchPage() {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {query ? `Search Results for "${query}"` : "Search Products"}
          </h1>
          
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items..."
                className="pl-10"
              />
            </div>
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <motion.div
          variants={staggeredGrid(0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div key={index} variants={gridItem}>
              <motion.div
                variants={premiumCardHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={`https://images.unsplash.com/photo-${1600000000000 + index * 100000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400`}
                      alt="Search result"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 transition-colors" />
                    </motion.button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      Search Result {index + 1}
                    </h3>
                    <p className="text-primary font-bold mb-3">${(index + 1) * 100}</p>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">4.{index + 5}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-accent">
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