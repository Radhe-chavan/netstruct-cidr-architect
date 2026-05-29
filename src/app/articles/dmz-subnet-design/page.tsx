import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Designing Secure DMZ Subnets for Public-Facing Services</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In the architecture of a secure enterprise network, the <strong>Demilitarized Zone (DMZ)</strong> is the critical buffer. It is the "no man's land" between the untrusted public internet and the highly sensitive internal corporate network. A properly architected DMZ ensures that even if a public-facing service is compromised, the attacker's "blast radius" is contained.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article explores the technical design patterns for DMZ subnets, focusing on segmentation, traffic flow control, and multi-tier security.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. The Core Philosophy of the DMZ</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The DMZ is based on the principle of <strong>Least Privilege</strong>. Any service that must be accessible from the internet (Web servers, Mail relays, DNS servers, VPN terminators) should live in the DMZ. No service in the DMZ should ever be trusted with direct, unrestricted access to the internal network.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. Standard DMZ Architectures</h2>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">2.1 The Three-Homed Firewall (Small/Medium Business)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In this design, a single firewall has three interfaces:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>Outside:</strong> Connected to the Internet.</li>
          <li><strong>Inside:</strong> Connected to the Corporate LAN.</li>
          <li><strong>DMZ:</strong> Connected to the public-facing subnets.</li>
        </ol>
        <p className="leading-7 [&:not(:first-child)]:mt-6">*Pros:* Cost-effective and simple to manage.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">*Cons:* A single point of failure and a single point of compromise. If the firewall's OS is breached, the entire network is exposed.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">2.2 The Dual-Firewall (Back-to-Back) Design (Enterprise)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This is the gold standard for high-security environments.</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>Front-End Firewall:</strong> Sits between the Internet and the DMZ.</li>
          <li><strong>Back-End Firewall:</strong> Sits between the DMZ and the Corporate LAN.</li>
        </ol>
        <p className="leading-7 [&:not(:first-child)]:mt-6">*Pros:* "Defense in Depth." An attacker must breach two different security appliances (ideally from different vendors to avoid shared vulnerabilities) to reach internal data.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. Subnetting the DMZ</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">When designing the DMZ subnets, precision is key.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.1 Use Non-Overlapping Private Space</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Even though these services are "public-facing," they should use private RFC 1918 addresses within the DMZ subnet. Public IPs are then mapped to these private IPs via <strong>Static NAT</strong> on the front-end firewall.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.2 Tiered Segmentation (The Multi-Tier DMZ)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Don't put all DMZ services in the same subnet. Use VLANs to separate them:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Web Tier:</strong> (Subnet A) Contains only web servers.</li>
          <li><strong>App Tier:</strong> (Subnet B) Contains application logic.</li>
          <li><strong>Data Proxy Tier:</strong> (Subnet C) Contains database proxies (not the databases themselves).</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. Controlling Traffic Flow: The "In-Out" Rule</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The most critical part of DMZ design is the firewall policy.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Internet to DMZ:</strong> Allowed only on specific ports (e.g., TCP 443 for HTTPS).</li>
          <li><strong>DMZ to Internet:</strong> Heavily restricted. Servers should only be allowed to reach out for OS updates or specific API calls.</li>
          <li><strong>DMZ to Internal:</strong> <strong>STRICTLY DENIED BY DEFAULT.</strong> If a web server in the DMZ needs to talk to an internal database, the firewall should only allow a specific connection from the DMZ IP to the Database IP on a specific port (e.g., TCP 1433 for SQL), and never the reverse.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">5. Advanced Security: Reverse Proxies and WAFs</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In 2026, a "raw" DMZ is rarely enough.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Reverse Proxies:</strong> Instead of exposing the web server directly, a reverse proxy (like Nginx or HAProxy) sits at the edge. It terminates the connection and opens a new one to the actual server, hiding the internal server's identity.</li>
          <li><strong>Web Application Firewalls (WAF):</strong> A WAF inspects Layer 7 traffic for SQL injection, Cross-Site Scripting (XSS), and other application-level attacks before the traffic ever reaches the DMZ subnet.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">6. Monitoring and Forensics</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Because the DMZ is the most targeted part of the network, it must be the most monitored.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Honeypots:</strong> Place "decoy" servers with known vulnerabilities in the DMZ to detect and slow down attackers.</li>
          <li><strong>Strict Logging:</strong> Every packet that enters or leaves a DMZ subnet should be logged to a central, immutable SIEM (Security Information and Event Management) system located in a highly secure, isolated management VLAN.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">7. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Designing a DMZ is an exercise in managed mistrust. By assuming that every public-facing server will eventually be targeted, an architect can build a subnet structure that minimizes risk and maximizes containment. A secure DMZ is not just a collection of servers; it is a meticulously governed transition zone that protects the organization's "crown jewels"—its internal data and users—from the chaos of the open internet.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
