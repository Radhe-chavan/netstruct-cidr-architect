import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Variable Length Subnet Masking (VLSM): A Definitive Guide</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">In the early days of networking, IP addresses were allocated in rigid blocks—Class A, B, or C. This "Classful" system was incredibly wasteful. If you needed 30 subnets with 10 hosts each, you had to use 30 separate Class C networks, wasting over 7,000 addresses. <strong>Variable Length Subnet Masking (VLSM)</strong> was the revolutionary solution that introduced efficiency and hierarchy to IP addressing.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article provides a definitive technical guide to VLSM, the math behind it, and how to implement it to optimize enterprise network address space.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. What is VLSM?</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">VLSM is a technique that allows network engineers to divide an IP address space into multiple subnets of different sizes. Unlike traditional subnetting, where every subnet in a network must use the same mask, VLSM allows you to "subnet a subnet."</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">For example, you can take a `10.0.0.0/16` network and create:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>One `/24` subnet for a large office (254 hosts).</li>
          <li>Two `/26` subnets for smaller departments (62 hosts each).</li>
          <li>Four `/30` subnets for point-to-point serial links (2 hosts each).</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. The Prerequisites for VLSM</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">To use VLSM, your network must meet two criteria:</p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li><strong>CIDR Support:</strong> The network must use Classless Inter-Domain Routing (slash notation).</li>
          <li><strong>Classless Routing Protocols:</strong> You must use a routing protocol that includes the subnet mask in its routing updates. Examples include <strong>OSPF, EIGRP, RIPv2, IS-IS,</strong> and <strong>BGP</strong>. (Legacy protocols like RIPv1 and IGRP do not support VLSM).</li>
        </ol>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. The VLSM Design Methodology</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">When designing a network with VLSM, you should always follow the <strong>"Largest to Smallest"</strong> rule. This ensures that you don't accidentally "box yourself in" by using a large address range for a small subnet and leaving no contiguous space for larger ones.</p>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 1: List Your Requirements</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">List every subnet you need and the number of hosts required for each, then sort them in descending order.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>*Example:*</li>
        </ul>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Main Office: 120 hosts</li>
          <li>Branch A: 50 hosts</li>
          <li>Branch B: 25 hosts</li>
          <li>WAN Link 1: 2 hosts</li>
          <li>WAN Link 2: 2 hosts</li>
        </ol>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 2: Assign the Largest Subnet</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Start with your base network (e.g., `192.168.1.0/24`).</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>The Main Office needs 120 hosts. The smallest mask that fits is `/25` (126 usable hosts).</li>
          <li>*Assignment:* `192.168.1.0/25` (Range: .0 - .127)</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 3: Subnet the Remaining Space</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The next subnet starts where the previous one ended (`.128`).</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Branch A needs 50 hosts. The smallest mask is `/26` (62 usable hosts).</li>
          <li>*Assignment:* `192.168.1.128/26` (Range: .128 - .191)</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 4: Continue Down the List</h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Branch B needs 25 hosts. Mask: `/27` (30 usable hosts).</li>
          <li>*Assignment:* `192.168.1.192/27` (Range: .192 - .223)</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">Step 5: Address the WAN Links</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">WAN links between routers only need 2 hosts.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Link 1: `192.168.1.224/30` (Range: .224 - .227)</li>
          <li>Link 2: `192.168.1.228/30` (Range: .228 - .231)</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. Overlap Prevention and Validation</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">The most common error in VLSM is <strong>Subnet Overlap</strong>. This happens if you start a new subnet before the previous one has logically ended. Always calculate the "Next Network Address" by adding the total size of the current subnet to its starting address.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">*Example Calculation:*</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">A `/27` has 32 total addresses. If it starts at `.192`, the next available subnet *must* start at `.224` ($192 + 32$).</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">5. Benefits of VLSM in the Enterprise</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>Address Conservation:</strong> Maximizes the utility of limited IPv4 space.</li>
          <li><strong>Hierarchical Addressing:</strong> Allows for efficient route summarization. Instead of advertising five subnets to the core, the router can advertise a single `192.168.1.0/24` route.</li>
          <li><strong>Reduced Routing Table Size:</strong> Summarization reduces the memory and CPU load on backbone routers.</li>
          <li><strong>Logical Isolation:</strong> Smaller broadcast domains improve security and reduce the impact of broadcast storms.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">6. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">VLSM is the fundamental tool that transformed IP addressing from a rigid class-based system into a flexible, hierarchical architecture. By allowing engineers to tailor subnet sizes to specific host requirements, VLSM enabled the internet to survive the IPv4 address crunch. Whether you are designing a small office network or a global cloud VPC, the principles of VLSM remain the bedrock of efficient network architecture.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
