
import React from "react";
import { ShieldCheck, Cookie, Lock, Eye, CheckCircle2 } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NetStruct - Privacy Policy & Data Security Compliance',
  description: 'Learn about our cookie usage policies, Google AdSense vendor compliance, DoubleClick DART cookies, and CCPA/GDPR data rights.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Privacy Policy & Data Security
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Compliance and user protection disclosures for NetStruct
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section className="bg-primary/5 p-4 rounded-lg border border-primary/20 flex gap-3">
          <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <p className="text-sm">
            <strong>AdSense Compliance Check:</strong> This Privacy Policy outlines our practices regarding cookies, advertising, and user privacy in full compliance with the Google Publisher Policies and CCPA/GDPR requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            1. Local-Only Calculation Logic
          </h2>
          <p className="leading-relaxed text-balance">
            NetStruct is designed with enterprise security in mind. Our CIDR Architect and subnetting tools perform all bitwise calculations directly within your local browser environment. We do not:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Transmit your internal IP addresses or network ranges to our servers.</li>
            <li>Log specific network architecture entries.</li>
            <li>Store your private infrastructure plans in any database.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary" />
            2. Cookies and Third-Party Advertising (Google AdSense)
          </h2>
          <p className="leading-relaxed text-balance mb-4">
            We use Google AdSense to serve advertisements on our website. To ensure transparency and policy compliance, please review the following disclosures regarding how advertising data is processed:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Third-Party Vendors:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to NetStruct or other websites.
            </li>
            <li>
              <strong>DoubleClick DART Cookie:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visits to NetStruct and/or other sites on the Internet.
            </li>
            <li>
              <strong>Opting Out:</strong> Users may opt out of personalized advertising by visiting{" "}
              <a 
                href="https://settings.google.com/ads/anonymous" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                Google Ads Settings
              </a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a 
                href="https://www.aboutads.info/choices/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                www.aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            3. Log Files & Analytics
          </h2>
          <p className="leading-relaxed text-balance">
            Like most websites, NetStruct gathers certain information automatically and stores it in log files. This information includes IP addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data. We use this information, which does not identify individual users, to analyze trends, administer the site, track users&apos; movements around the site, and gather demographic information about our user base as a whole.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. GDPR and CCPA Privacy Rights</h2>
          <p className="leading-relaxed text-balance">
            Under data protection regulations (including GDPR and CCPA), users have rights to access, delete, or restrict processing of their personal data. Because NetStruct does not collect personally identifiable information or retain network architectures, our data profile on individual users is minimal. For any concerns regarding privacy rights, please reach out to us via our support page.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          Last updated: July 7, 2026
        </p>
      </div>
    </div>
  );
}
