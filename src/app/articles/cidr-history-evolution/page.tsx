import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">The History and Evolution of Classless Inter-Domain Routing (CIDR)</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The internet as we know it today—a global, interconnected web of billions of devices—would have collapsed under its own weight in the early 1990s if not for a critical architectural shift. That shift was the transition from the rigid <strong>Classful Networking</strong> system to <strong>Classless Inter-Domain Routing (CIDR)</strong>.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article traces the history of CIDR, the technical desperation that birthed it, and how it revolutionized the way we allocate and route IP addresses.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. The Era of Classful Networking (1981–1993)</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In the early days of the ARPANET and the subsequent internet, IP addresses were managed under a system defined in RFC 791 and RFC 1519's predecessor. This system divided the 32-bit IPv4 address space into five fixed classes:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Class A:</strong> Designed for massive organizations. The first 8 bits defined the network (16 million hosts).</li>
          <li><strong>Class B:</strong> For medium-to-large organizations. The first 16 bits defined the network (65,535 hosts).</li>
          <li><strong>Class C:</strong> For small organizations. The first 24 bits defined the network (254 hosts).</li>
          <li><strong>Class D & E:</strong> Reserved for multicast and experimental use.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">1.1 The "Class B" Exhaustion Crisis</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The fundamental flaw in Classful Networking was its lack of granularity. If an organization needed 300 IP addresses, a Class C (254 addresses) was too small, so they were granted a Class B. This wasted over 65,000 addresses. By 1992, the IETF realized that the Class B address space would be entirely exhausted within two years, even though millions of addresses within those blocks remained unused.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. The Birth of CIDR (1993)</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">To solve the twin problems of address exhaustion and "Routing Table Explosion" (where backbone routers were being overwhelmed by the number of Class C network entries), the IETF introduced CIDR in RFC 1517, RFC 1518, and RFC 1519.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">2.1 Moving Beyond Octet Boundaries</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">CIDR eliminated the fixed boundaries of Classes A, B, and C. Instead of being restricted to 8, 16, or 24-bit prefixes, CIDR allowed a network prefix to be any length from 0 to 32 bits. This was represented using <strong>Slash Notation</strong> (e.g., `192.168.1.0/24`).</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The "mask" became a dynamic property of the route itself, rather than something implied by the first few bits of the IP address. This allowed for <strong>Variable Length Subnet Masking (VLSM)</strong>, where a single large allocation could be subdivided into many smaller, precisely sized subnets.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. Route Aggregation and Supernetting</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">One of the most significant impacts of CIDR was its ability to perform <strong>Route Aggregation</strong> (also known as Supernetting).</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In the Classful era, if an ISP had 256 Class C networks, it had to advertise 256 separate routes to the internet backbone. With CIDR, that same ISP could aggregate those 256 Class C networks into a single `/16` advertisement. This dramatically slowed the growth of the global BGP routing table, allowing the internet's infrastructure to remain stable as it scaled.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. The Implementation: Longest Prefix Match</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">With CIDR, multiple routes in a routing table might match a single destination IP. For example, a router might have a route for `10.0.0.0/8` and a more specific route for `10.1.2.0/24`.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">CIDR introduced the <strong>Longest Prefix Match (LPM)</strong> algorithm. When a packet arrives, the router identifies all matching entries but *always* selects the one with the longest mask (the most specific route). This allows for "default" routes to coexist with highly specific internal routes without conflict.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">5. CIDR and the Delay of IPv4 Exhaustion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">CIDR, combined with Network Address Translation (NAT) and the DHCP protocol, acted as a life-support system for IPv4. By allowing for extremely efficient allocation (e.g., giving a small branch office exactly a `/29` instead of a `/24`), CIDR extended the life of the 4.3 billion IPv4 addresses by decades.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">6. The Legacy: CIDR in the Cloud Era</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Today, CIDR is so foundational that it is often taken for granted. In modern cloud environments like AWS and Google Cloud, the "VPC CIDR" is the first thing a cloud architect defines. The precision of CIDR allows for the complex VPC peering and Transit Gateway architectures that power the modern web.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">7. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">CIDR was more than a technical patch; it was a fundamental reimagining of the internet's addressing logic. By breaking the chains of Classful Networking, CIDR enabled the internet to grow from a small academic network into a global utility. As we transition to IPv6, the principles of CIDR—prefix-based routing and hierarchical aggregation—remain the guiding stars of network engineering.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
