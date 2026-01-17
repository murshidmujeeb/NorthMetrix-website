import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-max section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-soft-gray mb-6">
              Terms of Service
            </h1>
            <p className="text-soft-gray/70">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using NorthMetriX's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
                <p className="leading-relaxed">
                  NorthMetriX provides growth intelligence and reputation analytics services, as well as digital enablement and growth services including web development, marketplace enablement, and marketing systems.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to interfere with the proper functioning of our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by NorthMetriX and are protected by intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Data and Privacy</h2>
                <p className="leading-relaxed">
                  Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your data as described in our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, NorthMetriX shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend your access to our services at any time, without prior notice or liability, for any reason, including if you breach these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:contact@northmetrix.ai" className="text-primary hover:underline">
                    contact@northmetrix.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
