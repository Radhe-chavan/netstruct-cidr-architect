
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">NetStruct</h3>
            <p className="text-sm text-muted-foreground">
              Empowering network engineers with precision architecture tools and professional subnetting resources.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">Resources</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/articles" className="hover:text-primary transition-colors">Knowledge Base</Link>
              <Link href="/about" className="hover:text-primary transition-colors">Mission & Team</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">Legal</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
              <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/legal/rights" className="hover:text-primary transition-colors">Content Rights</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} NetStruct - CIDR Architect. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="https://www.linkedin.com/in/indrajit-chavan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />LinkedIn
            </Link>
            <Link href="mailto:radheindrajit7522@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
