import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export default function Register() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <Card className="shadow-2xl border-border/50">
            <CardHeader className="text-center">
              <motion.div variants={fadeIn("up")} className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                <UserPlus className="h-8 w-8 text-white" />
              </motion.div>
              <CardTitle className="text-2xl gradient-text">Join DeelDeal</CardTitle>
              <p className="text-muted-foreground">Create your account to start swapping</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="name" placeholder="Your full name" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="your@email.com" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="Create password" className="pl-10" />
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                Create Account
              </Button>
              
              <Separator />
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Button variant="link" className="p-0 text-primary">Sign in</Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}