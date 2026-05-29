import { AdPlaceholder } from "@/components/ad-placeholder";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <AdPlaceholder variant="leaderboard" />
      <article className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Virtual LANs (VLANs) and Trunking: Configuration Best Practices</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">Virtual LANs (VLANs) are the fundamental tool for Layer 2 segmentation in the modern enterprise. Without VLANs, every device plugged into the same set of switches would reside in a single, massive, and insecure broadcast domain.</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">This article explores the technical mechanisms of VLANs, the 802.1Q trunking standard, and the "hard-earned" best practices for configuring them in professional environments.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">1. VLAN Mechanics: Logical Isolation</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">A VLAN is a logical partition of a physical switch. By assigning ports to different VLAN IDs (1 to 4094), you are essentially creating multiple virtual switches inside a single physical chassis. Traffic from VLAN 10 can never reach VLAN 20 without passing through a Layer 3 device (router/firewall).</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">2. 802.1Q Trunking: The Universal Language</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">When a network spans multiple switches, you need a way to carry traffic for multiple VLANs over a single physical link. This is <strong>Trunking</strong>.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>The Standard:</strong> IEEE 802.1Q is the industry-standard trunking protocol.</li>
          <li><strong>The Process (Tagging):</strong> When a frame enters a trunk port, the switch inserts a 4-byte <strong>802.1Q Tag</strong> into the Ethernet header. This tag contains the <strong>VLAN ID (VID)</strong>. The receiving switch reads the tag, removes it, and forwards the frame to the appropriate VLAN.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">3. Best Practices for Configuration</h2>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.1 The "Native VLAN" Security Rule</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">By default, the Native VLAN (usually VLAN 1) carries untagged traffic. This is a significant security risk (VLAN Hopping).</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>*Action:* Change the Native VLAN to an unused ID (e.g., VLAN 999) and ensure it is consistent on both ends of the trunk.</li>
          <li>*Action:* Manually tag the Native VLAN traffic if the switch supports it.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.2 Prune Your Trunks (VTP/Manual)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">By default, a trunk carries traffic for *all* VLANs. This means a broadcast in VLAN 100 will travel across a trunk to Switch B, even if Switch B has no ports assigned to VLAN 100.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>*Action:* Use `switchport trunk allowed vlan` to only permit the specific VLANs needed on that link. This saves bandwidth and CPU cycles.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.3 Avoid VLAN 1</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">VLAN 1 is the default for management, STP, and DTP. It is the first target for any attacker.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>*Action:* Create a dedicated <strong>Management VLAN</strong> (e.g., VLAN 10) for your switch and router IPs, and keep it separate from user data VLANs.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">3.4 Disable DTP (Dynamic Trunking Protocol)</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">DTP allows a port to automatically negotiate whether it should be an access port or a trunk. An attacker can use this to "negotiate" a trunk and gain access to all VLANs.</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>*Action:* Hard-code your ports. Use `switchport mode access` or `switchport mode trunk` and disable negotiation with `switchport nonegotiate`.</li>
        </ul>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">4. Voice VLANs: A Special Case</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">For VoIP deployments, use a <strong>Voice VLAN</strong>. This allows a single physical switch port to support both a PC (Data VLAN) and a VoIP Phone (Voice VLAN). The phone acts as a mini-switch, tagging its own traffic while passing the PC's traffic untagged.</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">5. Conclusion</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">VLANs and Trunking are the "internal wiring" of the enterprise network. While the basic configuration is simple, the difference between a "working" network and a "secure, scalable" network lies in the details of tagging, pruning, and hard-coding port roles. By following these best practices, you ensure that your Layer 2 foundation is resilient against both accidental storms and intentional attacks.</p>
      </article>
      <AdPlaceholder variant="banner" className="mt-12" />
    </div>
  );
}
