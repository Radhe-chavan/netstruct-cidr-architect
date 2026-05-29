
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AdPlaceholder } from "@/components/ad-placeholder";
import Link from "next/link";
import { BookOpen } from "lucide-react";

const articles = [
  {
    title: "Resolving IPv4 Overlap Anomalies in AWS/GCP VPCs",
    description: "Deep dive into resolving IPv4 overlap anomalies in modern cloud environments.",
    slug: "ipv4-overlap-aws-gcp",
    category: "Cloud"
  },
  {
    title: "The History and Evolution of CIDR",
    description: "Understanding the evolution of Classless Inter-Domain Routing.",
    slug: "cidr-history-evolution",
    category: "Theory"
  },
  {
    title: "Configuring and Scaling Broadcast Domains",
    description: "Best practices for scaling broadcast domains in enterprise networks.",
    slug: "broadcast-domain-scaling",
    category: "Scaling"
  },
  {
    title: "Transition Strategies for IPv6",
    description: "Dual stack, tunneling, and translation strategies for the modern web.",
    slug: "ipv6-transition-strategies",
    category: "IPv6"
  },
  {
    title: "BGP Routing Fundamentals",
    description: "A deep dive into the Path Vector Protocol that runs the internet.",
    slug: "bgp-routing-fundamentals",
    category: "Routing"
  },
  {
    title: "VLSM Subnetting Guide",
    description: "Efficient IP allocation using Variable Length Subnet Masking.",
    slug: "vlsm-subnetting-guide",
    category: "Subnetting"
  },
  {
    title: "The OSI Model in 2026",
    description: "A modern perspective on the classic seven-layer networking model.",
    slug: "osi-model-modern-perspective",
    category: "Theory"
  },
  {
    title: "Network Address Translation (NAT) Deep Dive",
    description: "Types, mechanisms, and performance impacts of NAT.",
    slug: "nat-deep-dive",
    category: "Protocols"
  },
  {
    title: "Designing Secure DMZ Subnets",
    description: "Architecting secure zones for public-facing services.",
    slug: "dmz-subnet-design",
    category: "Security"
  },
  {
    title: "Routing Loop Troubleshooting",
    description: "Identifying and fixing routing loops in complex topologies.",
    slug: "routing-loop-troubleshooting",
    category: "Troubleshooting"
  },
  {
    title: "Anycast vs. Unicast",
    description: "Architectural differences and modern use cases for anycast.",
    slug: "anycast-vs-unicast",
    category: "Architecture"
  },
  {
    title: "MPLS vs. SD-WAN",
    description: "Comparing traditional WAN with software-defined architectures.",
    slug: "mpls-vs-sdwan",
    category: "WAN"
  },
  {
    title: "Subnetting for IoT Deployments",
    description: "Strategies for large-scale IoT and industrial network deployments.",
    slug: "subnetting-iot-deployments",
    category: "IoT"
  },
  {
    title: "VLAN Trunking Best Practices",
    description: "Configuration and security best practices for VLANs and trunks.",
    slug: "vlan-trunking-best-practices",
    category: "VLANs"
  },
  {
    title: "Implementing QoS in Congested Networks",
    description: "Ensuring application performance with Quality of Service.",
    slug: "qos-congested-networks",
    category: "QoS"
  }
];

export default function ArticlesIndex() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Network Knowledge Base</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Technical guides and deep dives into networking, subnetting, and infrastructure.
        </p>
      </div>

      <AdPlaceholder variant="leaderboard" className="mb-12" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.slug} className="group">
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
