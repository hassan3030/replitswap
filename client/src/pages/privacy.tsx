import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.div variants={fadeIn("up")} className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.1)} className="mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
              </div>
              <p className="text-muted-foreground">
                At DeelDeal, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)} className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <Eye className="h-6 w-6 text-blue-500 mb-2" />
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Name, email address, phone number, and profile information you provide when creating an account.
                  </p>
                </Card>
                <Card className="p-4">
                  <Users className="h-6 w-6 text-green-500 mb-2" />
                  <h4 className="font-semibold mb-2">Usage Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Information about how you use our platform, including pages visited and features used.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
              <Card className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• To provide and maintain our trading platform services</li>
                  <li>• To process transactions and facilitate swaps between users</li>
                  <li>• To communicate with you about your account and transactions</li>
                  <li>• To improve our services and develop new features</li>
                  <li>• To ensure platform security and prevent fraud</li>
                  <li>• To comply with legal obligations and enforce our terms</li>
                </ul>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Data Security</h3>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Lock className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Protection Measures</h4>
                    <p className="text-muted-foreground mb-4">
                      We implement industry-standard security measures to protect your personal information:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• SSL encryption for all data transmission</li>
                      <li>• Secure server infrastructure with regular security audits</li>
                      <li>• Limited access to personal data on a need-to-know basis</li>
                      <li>• Regular security training for all employees</li>
                      <li>• Incident response procedures for potential data breaches</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Your Rights</h3>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Access & Portability</h4>
                    <p className="text-sm text-muted-foreground">
                      Request a copy of your personal data and download your information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Correction</h4>
                    <p className="text-sm text-muted-foreground">
                      Update or correct inaccurate personal information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Deletion</h4>
                    <p className="text-sm text-muted-foreground">
                      Request deletion of your personal data, subject to legal requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opt-out</h4>
                    <p className="text-sm text-muted-foreground">
                      Unsubscribe from marketing communications at any time.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <Card className="p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@deeldeal.com</p>
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