import Link from "next/link";
import { ChevronRight, User, Calendar, Clock, ArrowLeft } from "lucide-react";
import React from "react";

const articlesMap: Record<string, { title: string; description: string; category: string; readTime: string; date: string }> = {
  "ipv4-overlap-aws-gcp": {
    title: "Resolving IPv4 Overlap Anomalies in AWS/GCP VPCs",
    description: "Deep dive into resolving IPv4 overlap anomalies in modern cloud environments.",
    category: "Cloud",
    date: "June 14, 2026",
    readTime: "7 min read"
  },
  "cidr-history-evolution": {
    title: "The History and Evolution of CIDR",
    description: "Understanding the evolution of Classless Inter-Domain Routing.",
    category: "Theory",
    date: "May 28, 2026",
    readTime: "5 min read"
  },
  "broadcast-domain-scaling": {
    title: "Configuring and Scaling Broadcast Domains",
    description: "Best practices for scaling broadcast domains in enterprise networks.",
    category: "Scaling",
    date: "May 22, 2026",
    readTime: "6 min read"
  },
  "ipv6-transition-strategies": {
    title: "Transition Strategies for IPv6",
    description: "Dual stack, tunneling, and translation strategies for the modern web.",
    category: "IPv6",
    date: "June 2, 2026",
    readTime: "8 min read"
  },
  "bgp-routing-fundamentals": {
    title: "BGP Routing Fundamentals",
    description: "A deep dive into the Path Vector Protocol that runs the internet.",
    category: "Routing",
    date: "May 15, 2026",
    readTime: "8 min read"
  },
  "vlsm-subnetting-guide": {
    title: "VLSM Subnetting Guide",
    description: "Efficient IP allocation using Variable Length Subnet Masking.",
    category: "Subnetting",
    date: "May 10, 2026",
    readTime: "6 min read"
  },
  "osi-model-modern-perspective": {
    title: "The OSI Model in 2026",
    description: "A modern perspective on the classic seven-layer networking model.",
    category: "Theory",
    date: "April 29, 2026",
    readTime: "6 min read"
  },
  "nat-deep-dive": {
    title: "Network Address Translation (NAT) Deep Dive",
    description: "Types, mechanisms, and performance impacts of NAT.",
    category: "Protocols",
    date: "May 4, 2026",
    readTime: "7 min read"
  },
  "dmz-subnet-design": {
    title: "Designing Secure DMZ Subnets",
    description: "Architecting secure zones for public-facing services.",
    category: "Security",
    date: "May 1, 2026",
    readTime: "6 min read"
  },
  "routing-loop-troubleshooting": {
    title: "Routing Loop Troubleshooting",
    description: "Identifying and fixing routing loops in complex topologies.",
    category: "Troubleshooting",
    date: "April 18, 2026",
    readTime: "5 min read"
  },
  "anycast-vs-unicast": {
    title: "Anycast vs. Unicast: Architectural Differences and Use Cases",
    description: "Architectural differences and modern use cases for anycast.",
    category: "Architecture",
    date: "April 12, 2026",
    readTime: "5 min read"
  },
  "mpls-vs-sdwan": {
    title: "MPLS vs. SD-WAN",
    description: "Comparing traditional WAN with software-defined architectures.",
    category: "WAN",
    date: "April 8, 2026",
    readTime: "6 min read"
  },
  "subnetting-iot-deployments": {
    title: "Subnetting for IoT Deployments",
    description: "Strategies for large-scale IoT and industrial network deployments.",
    category: "IoT",
    date: "March 28, 2026",
    readTime: "6 min read"
  },
  "vlan-trunking-best-practices": {
    title: "VLAN Trunking Best Practices",
    description: "Configuration and security best practices for VLANs and trunks.",
    category: "VLANs",
    date: "March 20, 2026",
    readTime: "6 min read"
  },
  "qos-congested-networks": {
    title: "Implementing QoS in Congested Networks",
    description: "Ensuring application performance with Quality of Service.",
    category: "QoS",
    date: "March 15, 2026",
    readTime: "7 min read"
  }
};

export default function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const article = articlesMap[params.slug];
  if (!article) return <>{children}</>;

  // Build JSON-LD Schema for rich results in Google Search (Search Console compliance)
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": "Radhe Chavan",
      "jobTitle": "Network Solutions Architect",
    },
    "publisher": {
      "@type": "Organization",
      "name": "NetStruct",
      "logo": {
        "@type": "ImageObject",
        "url": "https://netstruct-cidr-architect.web.app/favicon.ico"
      }
    },
    "datePublished": article.date,
    "genre": "Networking",
    "inLanguage": "en-US",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Breadcrumbs for easy navigation (AdSense UX Policy compliance) */}
      <nav className="flex items-center space-x-2 text-xs md:text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/articles" className="hover:text-primary transition-colors">Articles</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">{article.title}</span>
      </nav>

      {/* Author details header (E-E-A-T Optimization) */}
      <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4 border-b border-border/50 pb-4">
        <div className="flex items-center gap-1.5">
          <User className="h-4 w-4 text-primary" />
          <span>By <strong className="text-foreground">Radhe Chavan</strong> (Network Architect)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* JSON-LD Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* The Article Content */}
      <div className="article-content">
        {children}
      </div>

      {/* Author Profile Box at bottom (E-E-A-T Compliance) */}
      <div className="mt-12 p-6 bg-secondary/30 rounded-xl border border-border/60 flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-lg text-foreground mb-1">About the Author</h4>
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Radhe Chavan</strong> is a Cisco-certified Network Solutions Architect with over a decade of experience designing enterprise-grade WAN topologies, cloud VPC architectures, and broadcast domains.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/about" className="text-primary hover:underline font-semibold">Our Mission</Link>
            <Link href="/contact" className="text-primary hover:underline font-semibold">Contact Support</Link>
          </div>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="mt-8 flex justify-between items-center border-t border-border/40 pt-6">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
        </Link>
      </div>
    </div>
  );
}
