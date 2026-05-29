import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Anycast vs. Unicast: Architectural Differences and Use Cases</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In standard internet communication, we think of an IP address as a unique identifier for a single physical or virtual device. This is <strong>Unicast</strong>. However, the modern internet—especially Content Delivery Networks (CDNs) and DNS—relies on a much more sophisticated routing paradigm known as <strong>Anycast</strong>.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article provides a technical comparison of Anycast and Unicast, explaining how they work at the BGP level and when to deploy each.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. Unicast: The 1-to-1 Standard</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In a Unicast network, every IP address is globally unique. When a packet is sent to `1.2.3.4`, there is only one destination in the entire world that can receive it.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Routing:</strong> The internet's BGP tables converge on a single path (or a set of equal-cost paths) to that specific host.</li>
          <li><strong>Use Case:</strong> Almost everything. SSH sessions, personal web browsing, database connections.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. Anycast: The 1-to-Nearest Paradigm</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Anycast allows multiple, geographically dispersed servers to share the *exact same* IP address. When a packet is sent to an Anycast IP, the internet routing infrastructure (BGP) delivers it to the "nearest" server based on routing metrics (usually the shortest AS_PATH).</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">2.1 How Anycast Works (The BGP Magic)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Multiple data centers (e.g., in London, Tokyo, and New York) all advertise the same prefix (e.g., `8.8.8.0/24`) to their respective ISPs. ISPs pass these advertisements up to the internet backbone. A user in San Francisco will see the Tokyo advertisement as a 10-hop path and the New York advertisement as a 3-hop path. Their router will naturally send the traffic to New York.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. Key Differences</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">| Feature | Unicast | Anycast |</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">| :--- | :--- | :--- |</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">| <strong>Mapping</strong> | 1 IP to 1 Host | 1 IP to Many Hosts |</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">| <strong>Routing Decision</strong> | Destination is fixed. | Destination is chosen by the network. |</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">| <strong>Reliability</strong> | Single point of failure (unless load balanced). | Native failover (if one site goes down, BGP reroutes). |</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">| <strong>Statefulness</strong> | Ideal for TCP/Long-lived sessions. | Challenging for TCP (routing changes can break sessions). |</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. The Challenge of "Anycast Flapping"</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Because Anycast relies on BGP, a change in the global routing table could suddenly decide that the "nearest" server for a user has changed from New York to London. If this happens in the middle of a TCP session, the session will break because the London server has no record of the user's TCP state.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Solution:</strong> Anycast is most commonly used for <strong>UDP-based protocols</strong> (like DNS) where a single packet-response exchange is all that's needed. For HTTP/HTTPS, advanced techniques like consistent hashing or "BGP pinning" are used.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">5. Primary Use Cases</h2>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">5.1 Global DNS (Root Servers & Google/Cloudflare)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The 13 root DNS servers actually consist of hundreds of physical servers worldwide using Anycast. This ensures that a user's DNS query is always answered by the lowest-latency instance.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">5.2 DDoS Mitigation</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Anycast is a primary defense against Distributed Denial of Service (DDoS) attacks. Because the attack traffic is directed at a single IP, the Anycast network naturally "absorbs" and distributes the attack load across dozens of data centers, preventing any single site from being overwhelmed.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">5.3 CDNs (Cloudflare, Akamai)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">CDNs use Anycast to serve static assets (images, JS) from the edge. This provides a "local" experience for a global audience using a single set of URLs.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">6. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Anycast is the architecture of the global edge. By leveraging the inherent logic of BGP routing, Anycast transforms a single IP address into a resilient, distributed service point. While Unicast remains the bedrock of point-to-point communication, Anycast is what allows the internet to scale to billions of users with sub-millisecond responsiveness.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
