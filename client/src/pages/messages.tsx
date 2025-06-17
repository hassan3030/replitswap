import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Messages() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.h1 variants={fadeIn("up")} className="text-3xl font-bold mb-8">Messages</motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeIn("left")} className="lg:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search conversations..." className="pl-10" />
                  </div>
                  
                  <div className="space-y-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
                        <Avatar>
                          <AvatarImage src={`https://images.unsplash.com/photo-${1472099645785 + index * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100`} />
                          <AvatarFallback>U{index + 1}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">User {index + 1}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            Last message preview...
                          </p>
                        </div>
                        {index < 2 && <Badge className="bg-primary">New</Badge>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("right")} className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs p-3 rounded-lg ${
                          index % 2 === 0 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">Sample message {index + 1}</p>
                          <p className="text-xs opacity-70 mt-1">10:3{index} AM</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}