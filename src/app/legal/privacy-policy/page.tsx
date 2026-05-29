
"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Network Data Privacy
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          How we protect your architectural data at NetStruct
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Local-Only Calculation Logic</h2>
          <p className="leading-relaxed text-balance">
            NetStruct is designed with enterprise security in mind. Our CIDR Architect and subnetting tools perform all bitwise calculations directly within your local browser environment. We do not:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Transmit your internal IP addresses or network ranges to our servers.</li>
              <li>Log specific network architecture entries.</li>
              <li>Store your private infrastructure plans in any database.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Information We Encounters</h2>
          <p className="leading-relaxed text-balance">
            We only encounter anonymized, non-sensitive data used for:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Aggregated site performance monitoring.</li>
              <li>Improving the responsive design of our network tools.</li>
              <li>Identifying common technical queries in our Knowledge Base.</li>
            </ul>
            We never associate this data with your specific network architecture.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. No Enterprise Tracking</h2>
          <p className="leading-relaxed text-balance">
            We recognize the sensitive nature of enterprise IP management. NetStruct does not track, store, or profile the network segments you architect using our tools. Your topology remains your proprietary information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Security Standards</h2>
          <p className="leading-relaxed text-balance">
            Our platform uses industry-standard HTTPS encryption for all traffic. Because our tools are client-side, the risk of "data-in-transit" exposure for your specific network plans is effectively zero.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          Last updated: May 27, 2026
        </p>
      </div>
    </div>
  );
}
