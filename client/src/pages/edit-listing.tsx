import { motion } from "framer-motion";
import { useParams } from "wouter";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function EditListing() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
          <motion.div variants={fadeIn("up")} className="mb-6">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Listings
            </Button>
          </motion.div>
          
          <motion.h1 variants={fadeIn("up")} className="text-3xl font-bold mb-8 text-center gradient-text">Edit Listing #{id}</motion.h1>
          
          <motion.div variants={fadeIn("up", 0.1)}>
            <Card>
              <CardHeader>
                <CardTitle>Edit Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" defaultValue="Professional DSLR Camera" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" defaultValue="Canon EOS 5D Mark IV with lens kit..." rows={4} />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1">Cancel</Button>
                  <Button className="flex-1 bg-gradient-to-r from-primary to-accent">Update Listing</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}