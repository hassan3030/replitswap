import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Package, CheckCircle, Clock, XCircle } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function SwapHistory() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 gradient-text"
        >
          Swap History
        </motion.h1>
        
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div key={index} variants={fadeIn("up", index * 0.05)}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Package className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold">Swap #{1000 + index}</h3>
                        <p className="text-sm text-muted-foreground">
                          {index + 1} days ago
                        </p>
                      </div>
                    </div>
                    <Badge className={
                      index % 3 === 0 ? "bg-green-500" :
                      index % 3 === 1 ? "bg-yellow-500" : "bg-red-500"
                    }>
                      {index % 3 === 0 ? "Completed" : index % 3 === 1 ? "Pending" : "Cancelled"}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Your Item</h4>
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://images.unsplash.com/photo-${1600000000000 + index * 50000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100`}
                          alt="Your item"
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium">Your Item {index + 1}</p>
                          <p className="text-sm text-muted-foreground">${(index + 1) * 100}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Received Item</h4>
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://images.unsplash.com/photo-${1600000000000 + index * 75000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100`}
                          alt="Received item"
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium">Received Item {index + 1}</p>
                          <p className="text-sm text-muted-foreground">${(index + 1) * 120}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://images.unsplash.com/photo-${1472099645785 + index * 1000}`} />
                        <AvatarFallback>U{index + 1}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        Swapped with User {index + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Jan {index + 1}, 2024
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}