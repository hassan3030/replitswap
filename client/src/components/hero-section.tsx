import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Heart, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  fadeIn, 
  slideIn, 
  floatingAnimation, 
  glowEffect, 
  magneticButton, 
  textReveal, 
  gradientShift,
  premiumCardHover,
  staggerContainer
} from "@/lib/animations";
import { useSmoothScroll } from "@/hooks/use-scroll-animation";
import { useRef } from "react";

export function HeroSection() {
  const { scrollToSection } = useSmoothScroll();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.9, 0.8]);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Modern laptop workspace",
      category: "Electronics",
      subcategory: "Latest Tech",
      className: "w-64 h-48 top-8 right-16",
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=225",
      alt: "Fashion accessories watch",
      category: "Fashion",
      subcategory: "Premium Style",
      className: "w-48 h-36 top-32 right-2",
      delay: 0.5,
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&h=200",
      alt: "Home tools and hardware",
      category: "Tools",
      subcategory: "Quality Gear",
      className: "w-40 h-32 top-56 right-24",
      delay: 1,
    },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-primary/5 py-20 lg:py-32">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
          style={{ y }}
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "1.5s" }}
          className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/25 to-primary/15 blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-1/4 h-4 w-4 rotate-45 bg-gradient-to-br from-primary to-accent opacity-60"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-32 right-1/3 h-6 w-6 rounded-full bg-gradient-to-br from-accent to-primary opacity-40"
        />
        
        {/* Sparkle effects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-primary"
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Premium Badge */}
            <motion.div variants={fadeIn("up", 0)} className="flex justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="relative bg-background/80 backdrop-blur-md border-primary/20 px-6 py-3 text-sm font-medium shadow-lg">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="mr-3"
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                  </motion.div>
                  Transform Your Items into Gold
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="ml-3"
                  >
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </motion.div>
                </Badge>
              </motion.div>
            </motion.div>

            {/* Premium Main Heading */}
            <div className="space-y-6">
              <motion.div variants={textReveal}>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <motion.span 
                    className="gradient-text block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    DeelDeal
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-block ml-4"
                    >
                      <Heart className="h-12 w-12 md:h-16 md:w-16 text-red-500 fill-current opacity-80" />
                    </motion.div>
                  </motion.span>
                </h1>
              </motion.div>
              
              <motion.h2
                variants={fadeIn("up", 0.4)}
                className="text-3xl md:text-5xl font-bold text-foreground leading-tight"
              >
                Swap, Trade, 
                <span className="text-primary"> Exchange</span>
              </motion.h2>
              
              <motion.p
                variants={fadeIn("up", 0.6)}
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Discover a revolutionary way to exchange items with{" "}
                <span className="font-semibold text-primary">trusted community members</span>. 
                Turn your unused items into{" "}
                <span className="font-semibold text-accent">treasures you love</span>.
              </motion.p>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div
              variants={fadeIn("up", 0.8)}
              className="flex flex-wrap gap-6"
            >
              <motion.div
                variants={magneticButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="group relative px-10 py-6 text-xl font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-2xl"
                  onClick={() => scrollToSection("items")}
                >
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    Browse Items
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-3"
                    >
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Button>
              </motion.div>

              <motion.div
                variants={premiumCardHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-xl font-semibold border-2 border-primary/30 bg-background/50 backdrop-blur-md hover:bg-primary/5 transition-all duration-300"
                >
                  List Your Item
                </Button>
              </motion.div>
            </motion.div>

            {/* Premium Stats */}
            <motion.div 
              variants={fadeIn("up", 1)}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { icon: Users, value: "10K+", label: "Active Traders" },
                { icon: Shield, value: "99.9%", label: "Safe Trades" },
                { icon: Zap, value: "50K+", label: "Items Traded" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={premiumCardHover}
                  initial="rest"
                  whileHover="hover"
                  className="text-center group"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-3"
                  >
                    <stat.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl font-bold mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.3 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Floating Images */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0">
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                  transition={{
                    duration: 1,
                    delay: image.delay,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`absolute ${image.className} rounded-3xl shadow-2xl overflow-hidden group cursor-pointer`}
                  style={{
                    perspective: "1000px",
                  }}
                >
                  <motion.div
                    variants={floatingAnimation}
                    animate="animate"
                    style={{ animationDelay: `${image.delay}s` }}
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 5,
                      rotateX: 5,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Enhanced overlay content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: image.delay + 0.5 }}
                        className="text-sm font-bold mb-1"
                      >
                        {image.category}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: image.delay + 0.7 }}
                        className="text-xs opacity-90 font-medium"
                      >
                        {image.subcategory}
                      </motion.p>
                    </div>
                    
                    {/* Hover glow effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
