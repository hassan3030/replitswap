import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.div variants={fadeIn("up")} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.1)} className="mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Agreement to Terms</h2>
              </div>
              <p className="text-muted-foreground">
                By accessing and using DeelDeal, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)} className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Platform Usage</h3>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Acceptable Use</h4>
                    <p className="text-muted-foreground mb-4">
                      You agree to use DeelDeal only for lawful purposes and in accordance with these terms:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• You must be at least 18 years old to use our service</li>
                      <li>• Provide accurate and truthful information in your listings</li>
                      <li>• Respect other users and maintain professional communication</li>
                      <li>• Only list items you legally own and have the right to trade</li>
                      <li>• Complete transactions in good faith and as agreed</li>
                      <li>• Report any suspicious or fraudulent activity</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Prohibited Activities</h3>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Restrictions</h4>
                    <p className="text-muted-foreground mb-4">
                      The following activities are strictly prohibited on our platform:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Trading illegal, stolen, or counterfeit items</li>
                      <li>• Misrepresenting the condition or authenticity of items</li>
                      <li>• Harassment, threats, or abusive behavior toward other users</li>
                      <li>• Creating multiple accounts to circumvent restrictions</li>
                      <li>• Attempting to bypass our fee structure</li>
                      <li>• Using automated systems to scrape or manipulate our platform</li>
                      <li>• Sharing personal contact information to avoid platform fees</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Trading Guidelines</h3>
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Transaction Process</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Seller Responsibilities</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Accurate item descriptions and photos</li>
                      <li>• Prompt communication with potential traders</li>
                      <li>• Secure packaging and timely shipping</li>
                      <li>• Honoring agreed-upon trade terms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Buyer Responsibilities</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Careful review of item details before trading</li>
                      <li>• Payment of any agreed-upon cash differences</li>
                      <li>• Prompt confirmation of item receipt</li>
                      <li>• Fair and honest feedback ratings</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Limitation of Liability</h3>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Scale className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Platform Role</h4>
                    <p className="text-muted-foreground mb-4">
                      DeelDeal serves as a marketplace platform connecting users. We do not:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Guarantee the quality, safety, or legality of items listed</li>
                      <li>• Take responsibility for disputes between trading parties</li>
                      <li>• Assume liability for shipping damage or loss</li>
                      <li>• Verify the identity or credentials of all users</li>
                      <li>• Guarantee successful completion of trades</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Users trade at their own risk and are responsible for conducting due diligence.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Account Termination</h3>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  We reserve the right to suspend or terminate accounts that violate these terms, including but not limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multiple complaints or negative feedback</li>
                  <li>• Fraudulent or deceptive practices</li>
                  <li>• Violation of platform rules and guidelines</li>
                  <li>• Non-payment of fees or chargebacks</li>
                  <li>• Inactivity for extended periods</li>
                </ul>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Changes to Terms</h3>
              <Card className="p-6">
                <p className="text-muted-foreground">
                  We may update these Terms of Service periodically. Users will be notified of significant changes via email or platform notifications. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> legal@deeldeal.com</p>
                  <p><strong>Address:</strong> 123 Trade Street, New York, NY 10001</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </Card>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}