import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedItems } from "@/components/featured-items";
import { RatingSystem } from "@/components/rating-system";
import { useScrollToTop } from "@/hooks/use-scroll-animation";

export default function Home() {
  useScrollToTop();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedItems />
        <RatingSystem />
      </main>
      
      {/* Footer */}
      <footer className="bg-neutral-800 dark:bg-neutral-900 text-neutral-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-32 gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">
                    DeelDeal
                  </span>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 max-w-sm">
                Connecting communities through trusted item exchanges. Turn your unused items into treasures you love.
              </p>
            </div>
            
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-3 text-neutral-400">
                {["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Collectibles"].map((category) => (
                  <li key={category}>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3 text-neutral-400">
                {["Help Center", "Safety Guidelines", "Contact Us", "Community Forum"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-neutral-400">
                {["About Us", "Privacy Policy", "Terms of Service", "Careers"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-sm">
                &copy; 2024 DeelDeal. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-neutral-400">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                  <a key={item} href="#" className="hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
