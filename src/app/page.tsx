import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Network, Globe, Shield, Activity, ArrowRight, Zap, Database, Server } from "lucide-react";
import Link from "next/link";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { CidrCalculator } from "@/components/cidr-calculator";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-20 lg:py-28 text-center bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-lg mb-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary mb-6 text-balance">
            Master Your Network Topology
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl lg:text-2xl mb-8 text-balance">
            Design efficient, scalable IPv4 architectures with NetStruct. Our CIDR Architect provides the precision tools you need for subnet planning, broadcast domain management, and cloud VPC optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#calculator" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                Launch Architect
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/articles" passHref>
              <Button size="lg" variant="outline" className="shadow-md transition-transform hover:scale-105">
                Read Knowledge Base
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4 mb-12">
        <div id="slot-lead-billboard" className="min-h-[90px] w-full flex justify-center items-center bg-muted/20 rounded-lg border border-dashed border-border">
          <AdPlaceholder variant="leaderboard" label="Top Network Banner" />
        </div>
      </div>

      <section id="calculator" className="w-full py-12 scroll-mt-20">
        <CidrCalculator />
      </section>

      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl font-headline text-primary mb-12">
            Why NetStruct?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <CardHeader className="items-center text-center">
                <Server className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-headline">VPC Optimization</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-foreground/70 text-balance">
                  Prevent IP address overlap in multi-cloud environments (AWS/GCP/Azure) with precise subnet segmentation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <CardHeader className="items-center text-center">
                <Database className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-headline">Broadcast Domains</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-foreground/70 text-balance">
                  Minimize network noise and optimize switch performance by architecting efficient broadcast domain boundaries.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <CardHeader className="items-center text-center">
                <Activity className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-headline">RFC Compliance</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-foreground/70 text-balance">
                  Build your infrastructure on standard-compliant network ranges for seamless BGP routing and ISP interoperability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 📚 Educational Documentation & Subnetting FAQ Section (AdSense Compliance - High Value Written Content) */}
      <section className="w-full py-12 md:py-16 bg-muted/20 border-t border-b border-border/50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="space-y-4 mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
              Understanding CIDR & Subnetting
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive technical guide to Classless Inter-Domain Routing and IP address planning.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">What is CIDR?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Classless Inter-Domain Routing (CIDR) was introduced in 1993 by the Internet Engineering Task Force (IETF) to replace the older, highly inefficient class-based addressing architecture (Classes A, B, and C). 
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                By allowing allocation of IP addresses on arbitrary bit boundaries rather than rigid 8, 16, or 24-bit blocks, CIDR greatly slowed down the exhaustion of the IPv4 address space and kept routing tables globally manageable.
              </p>
              <h3 className="text-xl font-bold text-foreground pt-2">How Subnet Calculations Work</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                A CIDR prefix (e.g., <code>/24</code>) represents the number of bits allocated to the network address. The remaining bits (e.g., <code>32 - 24 = 8 bits</code> in IPv4) are allocated to host addresses. 
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                The total number of hosts is calculated as <code>2<sup>H</sup></code> (where <code>H</code> is the number of host bits), and the usable hosts is <code>2<sup>H</sup> - 2</code>, as the first address represents the network identifier and the last address represents the broadcast domain.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-foreground text-center border-b border-border/50 pb-2">Common Subnetting FAQ</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-primary">Q: What is a Subnet Mask?</h4>
                  <p className="text-muted-foreground mt-1">
                    A subnet mask is a 32-bit number that masks an IP address, dividing the IP address into the network address and host address. For example, a <code>/24</code> prefix translates to <code>255.255.255.0</code>.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Q: Why are two IP addresses subtracted in every subnet?</h4>
                  <p className="text-muted-foreground mt-1">
                    The first address in any subnet is reserved as the <strong>Network Address</strong> (e.g., <code>192.168.1.0</code> for a /24), and the last address is reserved as the <strong>Broadcast Address</strong> (e.g., <code>192.168.1.255</code>). Neither can be assigned to a physical host.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary">Q: What is a VPC range?</h4>
                  <p className="text-muted-foreground mt-1">
                    In cloud services like AWS and Google Cloud, Virtual Private Clouds (VPCs) are typically designed using private IP blocks defined in RFC 1918. Common ranges include <code>10.0.0.0/16</code>, <code>172.16.0.0/12</code>, and <code>192.168.0.0/16</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-4 mt-12 mb-20">
        <div id="slot-sidebar-skyscraper" className="min-h-[250px] w-full flex justify-center items-center bg-muted/20 rounded-lg border border-dashed border-border">
          <AdPlaceholder variant="banner" label="Footer Network Architecture Ad" />
        </div>
      </div>
    </div>
  );
}
