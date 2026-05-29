
import { Network, Server, Globe, Shield, Cpu, Code, Activity } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans">
      <section className="text-center mb-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-foreground shadow-lg rounded-2xl p-12 border border-primary/10">
        <h1 className="text-5xl font-extrabold mb-6 font-headline text-primary">🌟 Our Mission</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed text-balance">
          At NetStruct, we are dedicated to providing precision network engineering tools for the modern internet infrastructure. 
          Our platform simplifies complex architectural challenges through automated CIDR analysis and authoritative technical resources.
        </p>
      </section>

      <section className="mb-16 bg-card shadow-md rounded-2xl p-10 border border-border">
        <h2 className="text-4xl font-bold mb-6 font-headline text-primary">🔬 Engineering Excellence</h2>
        <p className="text-lg leading-relaxed mb-6 text-foreground/80">
          Our solutions are built on the rigorous standards of RFC-compliant networking and information theory. 
          From IPv4 subnetting to BGP routing optimization, we deliver data-driven insights that empower engineers to build resilient, high-performance networks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
           <div className="flex flex-col items-center p-4 text-center">
              <Server className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold">Precision</h3>
              <p className="text-sm text-muted-foreground">Exact bitwise calculations for mission-critical subnetting.</p>
           </div>
           <div className="flex flex-col items-center p-4 text-center">
              <Shield className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold">Reliability</h3>
              <p className="text-sm text-muted-foreground">Tools verified against industry-standard network protocols.</p>
           </div>
           <div className="flex flex-col items-center p-4 text-center">
              <Globe className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-bold">Scalability</h3>
              <p className="text-sm text-muted-foreground">Architecting boundaries for global-scale cloud deployments.</p>
           </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <Network className="h-6 w-6" />
            Infrastructure Planning
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Advanced CIDR analysis and network boundary evaluation tools designed for systems architects and network administrators.
          </p>
        </div>

        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <Cpu className="h-6 w-6" />
            Cloud VPC Design
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Strategic subnet segmentation for multi-cloud environments, ensuring zero IP overlap and optimal security group routing.
          </p>
        </div>

        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <Code className="h-6 w-6" />
            Protocol Standards
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Educational resources on BGP, OSPF, and IPv6 transition strategies to keep your team at the forefront of network evolution.
          </p>
        </div>

        <div className="bg-primary/5 shadow-sm rounded-2xl p-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
            <Activity className="h-6 w-6" />
            Network Auditing
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Dynamic tools for verifying broadcast domain integrity and validating address space utilization across enterprise deployments.
          </p>
        </div>
      </section>

      <section className="text-center mt-16 bg-muted p-12 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 font-headline text-primary">Why Choose NetStruct?</h2>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-4 text-foreground/80">
          We bridge the gap between complex network theory and practical infrastructure implementation. 
          Our tools are engineered for accuracy, transparency, and professional-grade reliability.
        </p>
      </section>
    </main>
  );
}
