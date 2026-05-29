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

      <div className="w-full max-w-5xl mx-auto px-4 mt-12 mb-20">
        <div id="slot-sidebar-skyscraper" className="min-h-[250px] w-full flex justify-center items-center bg-muted/20 rounded-lg border border-dashed border-border">
          <AdPlaceholder variant="banner" label="Footer Network Architecture Ad" />
        </div>
      </div>
    </div>
  );
}
