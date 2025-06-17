import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Star, Repeat, TrendingUp, Eye, Zap, Crown, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  premiumCardHover, 
  textReveal, 
  magneticButton, 
  glowEffect,
  staggeredGrid,
  gridItem,
  starAnimation
} from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";

export function FeaturedItems() {
  const { ref, isInView } = useScrollAnimation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const featuredItems = [
    {
      id: 1,
      title: "Professional DSLR Camera",
      description: "Canon EOS 5D Mark IV with lens kit, perfect for photography enthusiasts",
      price: "$1,200",
      originalPrice: "$1,500",
      rating: 4.8,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Professional DSLR camera equipment",
      status: "Available",
      statusColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      liked: false,
      featured: true,
      trending: "+15%",
      views: 2847,
      category: "Electronics"
    },
    {
      id: 2,
      title: "Designer Handbag",
      description: "Authentic leather designer handbag in excellent condition",
      price: "$450",
      originalPrice: "$650",
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Designer leather handbag",
      status: "Pending",
      statusColor: "bg-gradient-to-r from-yellow-500 to-amber-500",
      liked: true,
      featured: false,
      trending: "+8%",
      views: 1623,
      category: "Fashion"
    },
    {
      id: 3,
      title: "Electric Bicycle",
      description: "Eco-friendly e-bike with long battery life, perfect for city commuting",
      price: "$800",
      originalPrice: "$1,100",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Electric bicycle for commuting",
      status: "Available",
      statusColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      liked: false,
      featured: true,
      trending: "+22%",
      views: 3421,
      category: "Sports"
    },
    {
      id: 4,
      title: "Gaming Keyboard Set",
      description: "Mechanical gaming keyboard with RGB lighting and premium switches",
      price: "$150",
      originalPrice: "$220",
      rating: 4.7,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Gaming mechanical keyboard setup",
      status: "Available",
      statusColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      liked: false,
      featured: false,
      trending: "+5%",
      views: 987,
      category: "Gaming"
    },
  ];

  return (
    <section 
      id="items" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-background via-primary/3 to-accent/5 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
          className="absolute bottom-10 left-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          variants={textReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Featured Items
            </h2>
          </motion.div>
          
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Discover the most popular and trending items available for swap right now
          </motion.p>

          {/* Stats bar */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="h-4 w-4 text-primary" />
              </motion.div>
              <span>Trending This Week</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-accent" />
              <span>Most Viewed</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="h-4 w-4 text-yellow-500" />
              <span>Premium Quality</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Items Grid */}
        <motion.div
          variants={staggeredGrid(0.15)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={gridItem}
              className="group cursor-pointer"
            >
              <motion.div
                variants={premiumCardHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden bg-background/80 backdrop-blur-md rounded-3xl shadow-lg border border-border/50 group-hover:shadow-2xl transition-all duration-500"
              >
                {/* Featured badge */}
                {item.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-3 py-1 shadow-lg">
                      <Crown className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </motion.div>
                )}

                {/* Image container */}
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-t-3xl">
                    <motion.img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Gradient overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4 text-white"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-400">
                          <TrendingUp className="h-3 w-3" />
                          <span>{item.trending}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Heart button */}
                  <motion.button
                    variants={starAnimation}
                    whileHover="hover"
                    whileTap="tap"
                    className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg z-20"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors duration-300 ${
                        item.liked 
                          ? "text-red-500 fill-current" 
                          : "text-muted-foreground hover:text-red-500"
                      }`}
                    />
                  </motion.button>

                  {/* Status badge */}
                  <div className="absolute bottom-3 left-3">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Badge className={`${item.statusColor} text-white font-medium px-3 py-1 shadow-lg`}>
                        {item.status}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced content */}
                <div className="p-6">
                  <div className="mb-3">
                    <motion.h3
                      whileHover={{ scale: 1.02 }}
                      className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Price and rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-green-600 font-medium">
                        Save {((parseFloat(item.originalPrice?.slice(1) || "0") - parseFloat(item.price.slice(1))) / parseFloat(item.originalPrice?.slice(1) || "1") * 100).toFixed(0)}%
                      </span>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <motion.div
                          variants={starAnimation}
                          whileHover="hover"
                        >
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.reviews} reviews
                      </div>
                    </div>
                  </div>

                  {/* Action button */}
                  <motion.div
                    variants={magneticButton}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Repeat className="w-5 h-5" />
                        Make Swap
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            variants={magneticButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-12 py-6 text-xl font-bold border-2 border-primary/30 bg-background/50 backdrop-blur-md hover:bg-primary/5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-3"
              >
                <Eye className="h-6 w-6" />
                View All Items
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-5 w-5 text-primary" />
                </motion.div>
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
