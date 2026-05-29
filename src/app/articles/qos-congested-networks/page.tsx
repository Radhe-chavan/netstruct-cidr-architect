import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Implementing Quality of Service (QoS) in Congested Networks</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In a perfect world, network bandwidth would be infinite. In the real world, enterprise networks face constant congestion from massive data backups, video conferencing, and low-priority web traffic. <strong>Quality of Service (QoS)</strong> is the set of technologies that allows network engineers to manage this congestion by prioritizing "mission-critical" traffic over "best-effort" data.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article provides a technical framework for implementing QoS using the DiffServ model.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. The Need for QoS: Latency, Jitter, and Loss</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Congestion affects traffic in three ways:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>Latency:</strong> The delay in delivering a packet. High latency makes video calls feel "laggy."</li>
          <li><strong>Jitter:</strong> The variation in latency. Jitter is the primary enemy of smooth audio.</li>
          <li><strong>Packet Loss:</strong> When a router's buffer is full, it drops packets. For real-time voice, even 1% loss is noticeable.</li>
        </ol>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. The QoS Workflow: MQC (Modular QoS CLI)</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Implementing QoS follows a logical three-step process:</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 1: Classification and Marking</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Identify the traffic and "mark" it so downstream switches know its priority.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Classification:</strong> Using Access Control Lists (ACLs) or NBAR (Network Based Application Recognition) to find Zoom, Teams, or SQL traffic.</li>
          <li><strong>Marking:</strong> Inserting a value into the <strong>DSCP (Differentiated Services Code Point)</strong> field of the IPv4 header (or the CoS field in Layer 2 frames).</li>
          <li>*Standard:* EF (Expedited Forwarding) for Voice.</li>
          <li>*Standard:* AF41 (Assured Forwarding) for Video.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 2: Policy and Queuing</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Decide what to do with the marked traffic when a link is full.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Low Latency Queuing (LLQ):</strong> Gives EF-marked packets "priority" access to the exit. They jump to the front of the line.</li>
          <li><strong>Class-Based Weighted Fair Queuing (CBWFQ):</strong> Guarantees a minimum percentage of bandwidth to different classes of traffic (e.g., 20% for database, 10% for management).</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 3: Policing and Shaping</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Policing:</strong> Hard-dropping traffic that exceeds a certain rate (e.g., limit Guest Wi-Fi to 5Mbps).</li>
          <li><strong>Shaping:</strong> Buffering and "smoothing" traffic bursts to stay within a limit, which is less disruptive than policing.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. Best Practices for Enterprise QoS</h2>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.1 Trust Boundaries</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Decide where to "trust" markings. Usually, you mark traffic at the access switch (where the PC or Phone plugs in) and then "trust" those DSCP markings throughout the core.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.2 Prioritize "Scavenger" Class</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Identify high-bandwidth, non-essential traffic (like BitTorrent or OS updates) and mark it with a low-priority DSCP value (e.g., CS1). This ensures that if the link is full, this traffic is the first to be dropped.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.3 QoS is Not a Substitute for Bandwidth</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">QoS does not "create" bandwidth; it only manages what you have. If your 100Mbps link is constantly at 95% utilization, QoS will help voice calls stay clear, but the overall user experience will still suffer. Eventually, you must upgrade the link.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">QoS is the "traffic cop" of the enterprise network. By meticulously classifying, marking, and queuing traffic based on business value rather than packet size, engineers can ensure that mission-critical applications remain performant even during peak congestion. Mastering the DiffServ model is the final step in moving from a "best-effort" network to a professional-grade communication infrastructure.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
