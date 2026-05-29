import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">BGP Routing Fundamentals: Path Vector Protocol Deep Dive</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The Border Gateway Protocol (BGP) is the "glue" that holds the internet together. Unlike internal routing protocols (like OSPF or EIGRP) that focus on finding the shortest path within a single network, BGP is designed to manage routing between independent networks, known as <strong>Autonomous Systems (AS)</strong>.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article provides a technical deep dive into the fundamentals of BGP, its path-vector mechanics, and the attributes that govern how the internet makes its routing decisions.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. The Autonomous System (AS) Concept</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">BGP views the internet as a collection of Autonomous Systems. An AS is a set of IP prefixes under the control of a single administrative entity (e.g., an ISP, a university, or a large corporation like Google). Each AS is assigned a unique <strong>Autonomous System Number (ASN)</strong>.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">1.1 eBGP vs. iBGP</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>External BGP (eBGP):</strong> Used to exchange routing information between different ASes. eBGP peers are typically directly connected.</li>
          <li><strong>Internal BGP (iBGP):</strong> Used to distribute BGP information within a single AS. iBGP peers do not need to be directly connected, but they must have full connectivity (often via an IGP like OSPF).</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. BGP as a Path Vector Protocol</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">BGP is not a link-state protocol (it doesn't have a map of every link) nor a distance-vector protocol (it doesn't just use "hops"). It is a <strong>Path Vector Protocol</strong>.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">When BGP advertises a route, it includes the entire path of ASNs that the route has traveled through. This "AS_PATH" attribute serves two critical purposes:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>Loop Prevention:</strong> If a router sees its own ASN in the AS_PATH of a received advertisement, it knows a loop has occurred and rejects the route.</li>
          <li><strong>Path Selection:</strong> By default, BGP prefers the route with the shortest AS_PATH.</li>
        </ol>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. The BGP Session Lifecycle</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">BGP runs over TCP (Port 179), ensuring reliable delivery of routing updates. A BGP session moves through several states:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>Idle:</strong> The initial state.</li>
          <li><strong>Connect:</strong> Waiting for the TCP connection.</li>
          <li><strong>Active:</strong> Attempting to establish the TCP connection.</li>
          <li><strong>OpenSent:</strong> TCP is up; the BGP "Open" message has been sent.</li>
          <li><strong>OpenConfirm:</strong> Waiting for a "Keepalive" or "Notification" from the peer.</li>
          <li><strong>Established:</strong> The session is up, and prefixes can now be exchanged.</li>
        </ol>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. The BGP Decision Process (The "Tie-Breakers")</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">BGP is famous for its complex path selection algorithm. If a router learns multiple paths to the same prefix, it goes through a 13-step checklist to pick the best one. The most critical steps are:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>Weight:</strong> (Cisco specific) Highest weight wins.</li>
          <li><strong>Local Preference:</strong> Highest local preference wins (used to influence outbound traffic from your AS).</li>
          <li><strong>Locally Originated:</strong> Prefer routes originated by the router itself.</li>
          <li><strong>AS_PATH Length:</strong> Shortest AS_PATH wins.</li>
          <li><strong>Origin Type:</strong> IGP is preferred over EGP.</li>
          <li><strong>Multi-Exit Discriminator (MED):</strong> Lowest MED wins (used to influence inbound traffic to your AS from a neighbor).</li>
        </ol>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">5. BGP Attributes: Well-Known and Optional</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Attributes are pieces of data attached to every BGP route. They are categorized into four types:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Well-Known Mandatory:</strong> Must be included in every update (e.g., AS_PATH, NEXT_HOP, ORIGIN).</li>
          <li><strong>Well-Known Discretionary:</strong> Must be recognized by all BGP implementations but is optional to include (e.g., LOCAL_PREF).</li>
          <li><strong>Optional Transitive:</strong> If a router doesn't recognize it, it should still pass it to the next peer (e.g., COMMUNITY).</li>
          <li><strong>Optional Non-Transitive:</strong> If not recognized, it should be dropped (e.g., MED).</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">6. BGP Communities: Tagging the Internet</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">A BGP Community is an optional transitive attribute used to "tag" routes. These tags can be used to group prefixes and apply routing policies. For example, an ISP might tag all routes from "Customer A" with a specific community ID, allowing them to easily apply a lower priority to those routes when advertising them to the rest of the world.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">7. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">BGP is a protocol of policy, not just performance. It allows network administrators to navigate the complex geopolitical and economic landscape of the internet by controlling how traffic enters and leaves their borders. While its convergence time is slow compared to IGPs, BGP's ability to scale to millions of routes and manage the massive complexity of the global AS graph makes it the undisputed sovereign of internet routing.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
