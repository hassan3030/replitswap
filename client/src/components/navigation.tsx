import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  Heart, 
  MessageCircle, 
  User, 
  Settings, 
  LogOut,
  ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fadeIn, slideIn } from "@/lib/animations";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden lg:block bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <button className="hover:text-primary-foreground/80 transition-colors duration-200">
                عر
              </button>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-primary-foreground/80 transition-colors duration-200">
                Customer Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-lg"
            : "bg-background border-b"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Theme/Lang Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                عر
              </Button>
            </div>

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">
                <div className="h-10 w-32 gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">
                    DeelDeal
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden flex-1 md:block max-w-md"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-12 py-3 rounded-full border-2 border-primary/20 focus:border-primary transition-all duration-300"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full gradient-primary"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Actions */}
            <div className="hidden items-center gap-4 md:flex">
              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt="John Doe" />
                      <AvatarFallback className="gradient-primary text-primary-foreground">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">John Doe</span>
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Notifications */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs animate-bounce-gentle"
                  >
                    3
                  </Badge>
                </Button>
              </motion.div>

              {/* Wishlist */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="w-5 h-5" />
                  <Badge
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    5
                  </Badge>
                </Button>
              </motion.div>

              {/* Messages */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="relative">
                  <MessageCircle className="w-5 h-5" />
                  <Badge
                    variant="secondary"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-green-500 text-white"
                  >
                    2
                  </Badge>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Search */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:hidden"
          >
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-2 border-primary/20 focus:border-primary"
              />
            </form>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" alt="John Doe" />
                    <AvatarFallback className="gradient-primary text-primary-foreground">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <div className="relative">
                      <Bell className="w-6 h-6" />
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                      >
                        3
                      </Badge>
                    </div>
                    <span className="text-sm">Notifications</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <div className="relative">
                      <Heart className="w-6 h-6" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                        5
                      </Badge>
                    </div>
                    <span className="text-sm">Wishlist</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <div className="relative">
                      <MessageCircle className="w-6 h-6" />
                      <Badge
                        variant="secondary"
                        className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-green-500 text-white"
                      >
                        2
                      </Badge>
                    </div>
                    <span className="text-sm">Messages</span>
                  </motion.button>
                </div>

                <div className="space-y-2">
                  {[
                    { icon: User, label: "Profile" },
                    { icon: Settings, label: "Settings" },
                    { icon: LogOut, label: "Logout" },
                  ].map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors duration-200 w-full text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
