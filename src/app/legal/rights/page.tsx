
import { ShieldAlert } from 'lucide-react';

export default function RightsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Content Rights & Usage
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Guidelines for enjoying and sharing NetStruct materials responsibly
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Original Technical Content</h2>
          <p className="leading-relaxed text-balance">
            All CIDR calculation logic, network architecture articles, and educational diagrams created by NetStruct are the intellectual property of this platform. They are designed to support the global network engineering community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Usage Rights</h2>
          <p className="leading-relaxed text-balance">
            You are granted a non-exclusive right to use our calculators for personal or enterprise network planning. You may reference our articles in your internal technical documentation with proper attribution to NetStruct.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Prohibited Actions</h2>
          <p className="leading-relaxed text-balance">
            To maintain the integrity of our resources, you may not:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Automate the scraping of our Knowledge Base for commercial resale.</li>
              <li>Reverse engineer our proprietary UI components.</li>
              <li>Rebrand our tools as your own standalone products.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Professional & Academic Use</h2>
          <p className="leading-relaxed text-balance">
            We welcome the use of NetStruct in university settings and professional certification training (e.g., CCNA, Network+). Please contact us if you require formal permission for large-scale educational distribution.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-foreground/20">
          These guidelines are here to protect the quality of NetStruct resources while encouraging technical excellence across the network engineering field.
        </p>
      </div>
    </div>
  );
}
