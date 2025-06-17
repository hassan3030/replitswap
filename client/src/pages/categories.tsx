import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Package, Users, ArrowRight } from "lucide-react";
import { fadeIn, staggeredGrid, gridItem, premiumCardHover, magneticButton } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Phones, laptops, cameras, and gadgets",
    itemCount: 1247,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "Fashion",
    description: "Clothing, shoes, accessories, and jewelry",
    itemCount: 2156,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: true,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    name: "Sports & Outdoors",
    description: "Fitness equipment, outdoor gear, and sports items",
    itemCount: 987,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: false,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    name: "Home & Garden",
    description: "Furniture, decor, appliances, and garden tools",
    itemCount: 1543,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: false,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    name: "Books & Media",
    description: "Books, movies, music, and educational materials",
    itemCount: 756,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: false,
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: 6,
    name: "Gaming",
    description: "Video games, consoles, and gaming accessories",
    itemCount: 834,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: true,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 7,
    name: "Art & Collectibles",
    description: "Artwork, antiques, and collectible items",
    itemCount: 432,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: false,
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 8,
    name: "Automotive",
    description: "Car parts, accessories, and automotive tools",
    itemCount: 623,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    trending: false,
    color: "from-gray-500 to-slate-600"
  }
];

export default function Categories() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Browse Categories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing items across all categories. Find exactly what you're looking for or explore new possibilities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <Package className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-primary">8,578</h3>
            <p className="text-muted-foreground">Total Items</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <Users className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-green-500">2,431</h3>
            <p className="text-muted-foreground">Active Traders</p>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-orange-500">1,247</h3>
            <p className="text-muted-foreground">Swaps This Week</p>
          </Card>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          ref={ref}
          variants={staggeredGrid(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={gridItem}>
              <motion.div
                variants={premiumCardHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="group cursor-pointer h-full"
              >
                <Card className="h-full overflow-hidden bg-background/80 backdrop-blur-md border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative">
                    {/* Category Image */}
                    <div className="aspect-video overflow-hidden relative">
                      <motion.img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      {/* Trending Badge */}
                      {category.trending && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {category.itemCount.toLocaleString()} items
                        </span>
                        <div className="flex items-center gap-1 text-primary">
                          <Package className="h-4 w-4" />
                          <span className="font-medium">Browse</span>
                        </div>
                      </div>
                    </div>

                    <motion.div variants={magneticButton} whileHover="hover" whileTap="tap">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                        <span>Explore Category</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Popular Searches</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "iPhone", "Nike Shoes", "Gaming Chair", "Books", "Camera", 
              "Laptop", "Watches", "Headphones", "Furniture", "Bicycle"
            ].map((term, index) => (
              <motion.div
                key={term}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {term}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}