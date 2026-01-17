import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-max section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-soft-gray mb-6">
              Privacy Policy
            </h1>
            <p className="text-soft-gray/70">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  NorthMetriX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Company information (business name, industry)</li>
                  <li>Account credentials</li>
                  <li>Communications you send to us</li>
                  <li>Business data you choose to analyze through our platform</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices and updates</li>
                  <li>Analyze usage patterns to improve our platform</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to correct inaccurate data</li>
                  <li>The right to delete your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
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

export default Privacy;
