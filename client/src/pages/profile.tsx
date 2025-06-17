import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar, Package, MessageSquare, Settings } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn("up")} className="text-center mb-8">
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-muted-foreground mb-4">Active trader since 2022</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.9 rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                <span>47 swaps completed</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.1)}>
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="listings">My Listings</TabsTrigger>
                <TabsTrigger value="history">Swap History</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="listings" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={`https://images.unsplash.com/photo-${1600000000000 + index * 100000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400`}
                          alt="Listing"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">My Item {index + 1}</h3>
                        <p className="text-primary font-bold">${(index + 1) * 150}</p>
                        <Badge className="mt-2">Available</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="history">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Recent Swaps</h3>
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                          <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                            <Package className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Swap #{index + 1}</h4>
                            <p className="text-sm text-muted-foreground">
                              Completed {index + 1} days ago
                            </p>
                          </div>
                          <Badge>Completed</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Customer Reviews</h3>
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="border-b pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              by User {index + 1}
                            </span>
                          </div>
                          <p className="text-sm">
                            Great trader! Item was exactly as described and shipping was fast.
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Notification Settings
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Privacy Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}