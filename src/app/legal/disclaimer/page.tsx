
import { ShieldAlert } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Technical Disclaimer
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Last Updated: May 27, 2026
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Welcome to NetStruct</h2>
          <p className="leading-relaxed text-balance">
            A platform dedicated to providing network architecture analysis and technical infrastructure resources. This disclaimer outlines the purpose and limitations of our tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Informational & Educational Use Only</h2>
          <p className="leading-relaxed text-balance">
            All content on NetStruct — including CIDR calculators, subnetting guides, and routing articles — is provided for general informational and educational purposes only. It is not a substitute for a comprehensive network audit or certified professional consultation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. No Guarantee of Network Stability</h2>
          <p className="leading-relaxed text-balance">
            While our bitwise calculation engine is designed for extreme precision, we cannot guarantee that the subnets you architect will resolve all performance or connectivity issues in your specific environment. Network stability depends on numerous variables (hardware, firmware, cabling, ISPs) outside the scope of this tool.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. User Responsibility for Implementation</h2>
          <p className="leading-relaxed text-balance">
            By using NetStruct, you acknowledge that infrastructure changes carry inherent risks. You are responsible for validating all network configurations in a staged environment before deploying to production enterprise systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Limitation of Liability</h2>
          <p className="leading-relaxed text-balance">
            NetStruct, its creators, and affiliates shall not be held liable for any network downtime, data loss, hardware damage, or security vulnerabilities arising from the use of our calculations or resources.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4">
          By using NetStruct, you acknowledge that you have read, understood, and agreed to this technical disclaimer.
        </p>
      </div>
    </div>
  );
}
