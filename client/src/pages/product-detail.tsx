import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "wouter";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Star, Repeat, Share2, MessageSquare, ChevronLeft, MapPin, Calendar, Eye } from "lucide-react";
import { fadeIn, scaleIn, staggerContainer, premiumCardHover, magneticButton } from "@/lib/animations";

export default function ProductDetail() {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    title: "Professional DSLR Camera",
    description: "Canon EOS 5D Mark IV with 24-70mm lens kit. Perfect condition, barely used. Includes original box, manuals, and accessories. This camera has been my reliable companion for professional photography projects.",
    price: "$1,200",
    originalPrice: "$1,500",
    rating: 4.8,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    category: "Electronics",
    condition: "Excellent",
    location: "New York, NY",
    postedDate: "2 days ago",
    views: 245,
    seller: {
      name: "John Photography",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 4.9,
      totalSwaps: 24,
      joinDate: "Member since 2022"
    },
    specifications: {
      "Brand": "Canon",
      "Model": "EOS 5D Mark IV",
      "Megapixels": "30.4 MP",
      "Video": "4K",
      "Condition": "Excellent",
      "Year": "2020"
    },
    tags: ["Photography", "Professional", "Canon", "DSLR", "4K Video"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button variant="ghost" className="pl-0">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Header */}
            <motion.div variants={fadeIn("left")}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">{product.category}</Badge>
                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {product.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {product.postedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {product.location}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 bg-muted rounded-full"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "text-red-500 fill-current" : ""}`} />
                </motion.button>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeIn("left", 0.1)}>
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Specifications */}
            <motion.div variants={fadeIn("left", 0.2)}>
              <h3 className="font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeIn("left", 0.3)}>
              <h3 className="font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeIn("left", 0.4)} className="space-y-4">
              <div className="flex gap-4">
                <motion.div variants={magneticButton} whileHover="hover" whileTap="tap" className="flex-1">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent">
                    <Repeat className="w-5 h-5 mr-2" />
                    Make Swap Offer
                  </Button>
                </motion.div>
                <motion.div variants={magneticButton} whileHover="hover" whileTap="tap">
                  <Button size="lg" variant="outline">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Message
                  </Button>
                </motion.div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Seller Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Seller Information</h3>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                  <AvatarFallback>{product.seller.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{product.seller.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{product.seller.rating} rating</span>
                    </div>
                    <span>• {product.seller.totalSwaps} successful swaps</span>
                    <span>• {product.seller.joinDate}</span>
                  </div>
                </div>
                <motion.div variants={magneticButton} whileHover="hover" whileTap="tap">
                  <Button variant="outline">View Profile</Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Similar Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6">Similar Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                variants={premiumCardHover}
                initial="rest"
                whileHover="hover"
                className="cursor-pointer"
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={`https://images.unsplash.com/photo-${1606983340126 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400`}
                      alt="Similar item"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Similar Camera {index + 1}</h4>
                    <p className="text-primary font-bold">${800 + index * 100}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}