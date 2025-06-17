import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, Book, MessageCircle, Video } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Help() {
  const faqs = [
    {
      question: "How do I create my first listing?",
      answer: "To create a listing, click the 'Create Listing' button, fill in your item details, upload photos, and set your swap preferences. Make sure to provide accurate descriptions and clear photos for the best results."
    },
    {
      question: "How does the swap process work?",
      answer: "Browse items you're interested in, make a swap offer with your own items, negotiate with the other user through our messaging system, and arrange the exchange. We provide secure payment processing for any cash differences."
    },
    {
      question: "Is it safe to swap with strangers?",
      answer: "Yes! We have verification systems, user ratings, secure messaging, and dispute resolution processes. Always check user ratings and communicate through our platform for maximum safety."
    },
    {
      question: "What items can I swap?",
      answer: "You can swap almost anything legal and in good condition - electronics, fashion, books, sports equipment, home goods, and more. Check our prohibited items list for specific restrictions."
    },
    {
      question: "How are shipping costs handled?",
      answer: "Shipping costs are typically split between users or negotiated as part of the swap. You can also arrange local meetups to avoid shipping costs entirely."
    },
    {
      question: "What if I'm not satisfied with a swap?",
      answer: "We have a dispute resolution system and buyer protection policies. Contact our support team within 48 hours of receiving an item if there are any issues."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div variants={fadeIn("up")} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Help Center</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and get the help you need to make the most of DeelDeal.
            </p>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.1)} className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help topics..." 
                className="pl-12 py-4 text-lg"
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <motion.div variants={fadeIn("up", 0.1)}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Getting Started</h3>
                <p className="text-sm text-muted-foreground">Learn the basics of using DeelDeal</p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.2)}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <HelpCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Trading Tips</h3>
                <p className="text-sm text-muted-foreground">Best practices for successful swaps</p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <MessageCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Safety & Security</h3>
                <p className="text-sm text-muted-foreground">Stay safe while trading online</p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn("up", 0.4)}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Video className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground">Watch step-by-step guides</p>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("up", 0.2)} className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.3)} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-accent">
                  Contact Support
                </Button>
                <Button variant="outline">
                  Live Chat
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}