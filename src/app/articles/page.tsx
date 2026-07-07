"use client";

import React, { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AdPlaceholder } from "@/components/ad-placeholder";
import Link from "next/link";
import { BookOpen, Search, Filter, X } from "lucide-react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filter articles based on search query and category tab
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-headline text-primary">Network Knowledge Base</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Technical guides, RFC-compliant deep dives, and expert network engineering resources.
        </p>
      </div>

      {/* Ad slot for top banner */}
      <AdPlaceholder variant="leaderboard" className="mb-12" />

      {/* Search and Category Filters Panel */}
      <div className="bg-card border border-border p-6 rounded-2xl shadow-md mb-10 space-y-6">
        <div className="relative flex items-center max-w-lg mx-auto">
          <Search className="absolute left-3.5 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search guides (e.g. BGP, subnets, VPC)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 pr-10 py-6 text-base rounded-xl border-border/80 focus-visible:ring-primary"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchQuery("")}
              className="absolute right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-foreground/80">
            <Filter className="h-4 w-4 text-primary" />
            <span>Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full px-4 text-xs font-semibold"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Article Count */}
      <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
        <span>Showing {filteredArticles.length} of {articles.length} guides</span>
        {(searchQuery || selectedCategory !== "All") && (
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-primary h-auto p-0"
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug} className="group">
              <Card className="h-full hover:border-primary/80 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl leading-snug">{article.title}</CardTitle>
                  <CardDescription className="text-foreground/70 mt-2 line-clamp-2">{article.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-muted/20 border border-dashed border-border rounded-2xl">
          <BookOpen className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" />
          <h3 className="font-bold text-lg">No guides found</h3>
          <p className="text-muted-foreground text-sm mt-1">Try adjusting your search terms or filters.</p>
        </div>
      )}

      {/* Ad slot for bottom banner */}
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
