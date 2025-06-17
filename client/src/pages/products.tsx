import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Heart, Star, Repeat, Search, Filter, Grid, List, TrendingUp } from "lucide-react";
import { fadeIn, staggeredGrid, gridItem, premiumCardHover, magneticButton } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const mockProducts = [
  {
    id: 1,
    title: "Professional DSLR Camera",
    description: "Canon EOS 5D Mark IV with lens kit",
    price: "$1,200",
    rating: 4.8,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "Electronics",
    status: "Available",
    featured: true,
    trending: true
  },
  {
    id: 2,
    title: "Designer Handbag",
    description: "Authentic leather designer handbag",
    price: "$450",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "Fashion",
    status: "Available",
    featured: false,
    trending: false
  },
  {
    id: 3,
    title: "Electric Bicycle",
    description: "Eco-friendly e-bike with long battery life",
    price: "$800",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "Sports",
    status: "Available",
    featured: true,
    trending: true
  },
  {
    id: 4,
    title: "Gaming Keyboard",
    description: "Mechanical gaming keyboard with RGB",
    price: "$150",
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "Gaming",
    status: "Available",
    featured: false,
    trending: false
  },
  {
    id: 5,
    title: "Vintage Watch",
    description: "Classic Swiss mechanical watch",
    price: "$350",
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "Fashion",
    status: "Available",
    featured: false,
    trending: true
  },
  {
    id: 6,
    title: "Fitness Equipment",
    description: "Complete home gym setup",
    price: "$600",
    rating: 4.4,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "Sports",
    status: "Available",
    featured: false,
    trending: false
  }
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const { ref, isInView } = useScrollAnimation();

  const categories = ["All", "Electronics", "Fashion", "Sports", "Gaming", "Home & Garden"];

  const handleFilter = () => {
    let filtered = mockProducts.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "" || selectedCategory === "All" || product.category === selectedCategory;
      const price = parseInt(product.price.replace("$", "").replace(",", ""));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === "price-low") {
      filtered = filtered.sort((a, b) => parseInt(a.price.replace("$", "").replace(",", "")) - parseInt(b.price.replace("$", "").replace(",", "")));
    } else if (sortBy === "price-high") {
      filtered = filtered.sort((a, b) => parseInt(b.price.replace("$", "").replace(",", "")) - parseInt(a.price.replace("$", "").replace(",", "")));
    } else if (sortBy === "rating") {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">All Products</h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing items available for swap
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-6 bg-card rounded-2xl shadow-lg border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={2000}
              step={50}
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <motion.div variants={magneticButton} whileHover="hover" whileTap="tap">
              <Button onClick={handleFilter} className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Apply Filters
              </Button>
            </motion.div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("");
                setPriceRange([0, 2000]);
                setSortBy("newest");
                setFilteredProducts(mockProducts);
              }}
            >
              Clear All
            </Button>
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between mb-6"
        >
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {mockProducts.length} products
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Trending items marked with badge</span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          variants={staggeredGrid(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }
        >
          {filteredProducts.map((product, index) => (
            <motion.div key={product.id} variants={gridItem}>
              <motion.div
                variants={premiumCardHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-background/80 backdrop-blur-md border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                      {product.trending && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    {/* Heart Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 transition-colors" />
                    </motion.button>

                    {/* Status Badge */}
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        {product.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <motion.div variants={magneticButton} whileHover="hover" whileTap="tap">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                        <Repeat className="w-4 h-4 mr-2" />
                        Make Swap
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div variants={magneticButton} whileHover="hover" whileTap="tap">
            <Button size="lg" variant="outline" className="px-8">
              Load More Products
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}