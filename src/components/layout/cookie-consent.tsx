"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined cookies
    const consent = localStorage.getItem("netstruct_cookie_consent");
    if (!consent) {
      // Show the banner after a short delay for smooth entry
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("netstruct_cookie_consent", "accepted");
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("netstruct_cookie_consent", "declined");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-card/95 border border-border/80 backdrop-blur-md p-5 rounded-2xl shadow-2xl flex flex-col gap-4 text-left">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
            <Cookie className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-foreground">Cookie Policy Compliance</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We use cookies to analyze site traffic and optimize your subnetting calculations. In accordance with Google AdSense policies, third-party vendors use cookies to serve personalized ads based on your visits to our site.
            </p>
          </div>
          <button 
            onClick={handleDecline} 
            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Close consent banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border/40 pt-3">
          <Link 
            href="/legal/privacy-policy" 
            className="text-xs text-primary hover:underline font-semibold"
          >
            Read Privacy Policy
          </Link>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline} 
              className="text-xs h-8 rounded-lg"
            >
              Decline
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleAccept} 
              className="text-xs h-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-sm"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
