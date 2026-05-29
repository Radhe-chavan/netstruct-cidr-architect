
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ResultsDisplay } from "@/components/results-display";
import { Network, Globe, Shield, Activity } from "lucide-react";

export function CidrCalculator() {
  const [ip, setIp] = useState('192.168.1.1');
  const [cidr, setCidr] = useState(24);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    calculateSubnet();
  }, [ip, cidr]);

  const ipToLong = (ip: string) => {
    const parts = ip.split('.');
    if (parts.length !== 4) return null;
    let res = 0;
    for (let i = 0; i < 4; i++) {
      const part = parseInt(parts[i]);
      if (isNaN(part) || part < 0 || part > 255) return null;
      res = (res << 8) >>> 0;
      res += part;
    }
    return res >>> 0;
  };

  const longToIp = (long: number) => {
    return [
      (long >>> 24) & 0xFF,
      (long >>> 16) & 0xFF,
      (long >>> 8) & 0xFF,
      long & 0xFF
    ].join('.');
  };

  const calculateSubnet = () => {
    const ipLong = ipToLong(ip);
    if (ipLong === null) {
      setError('Invalid IPv4 address');
      setResults([]);
      return;
    }
    setError('');

    const mask = cidr === 0 ? 0 : (~(Math.pow(2, 32 - cidr) - 1)) >>> 0;
    const network = (ipLong & mask) >>> 0;
    const broadcast = (network | ~mask) >>> 0;
    const totalHosts = cidr >= 31 ? (cidr === 31 ? 2 : 1) : Math.pow(2, 32 - cidr);
    const usableHosts = cidr >= 31 ? (cidr === 31 ? 2 : 1) : totalHosts - 2;

    const firstUsable = cidr >= 31 ? network : network + 1;
    const lastUsable = cidr >= 31 ? broadcast : broadcast - 1;

    setResults([
      { label: 'Subnet Mask', value: longToIp(mask) },
      { label: 'Network Address', value: longToIp(network), isEmphasized: true },
      { label: 'Broadcast Address', value: longToIp(broadcast) },
      { label: 'Total Hosts', value: totalHosts.toLocaleString() },
      { label: 'Usable Host Range', value: `${longToIp(firstUsable)} - ${longToIp(lastUsable)}`, isEmphasized: true },
      { label: 'Usable Hosts', value: usableHosts.toLocaleString() }
    ]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-primary/5 rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-headline">CIDR & Subnet Architect</CardTitle>
              <CardDescription>
                Design and calculate network boundaries with precision.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ip-address" className="text-sm font-semibold flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  Base IPv4 Address
                </Label>
                <Input 
                  id="ip-address"
                  placeholder="e.g. 192.168.1.1" 
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  className={cn("font-mono", error && "border-destructive focus-visible:ring-destructive")}
                />
                {error && <p className="text-xs text-destructive mt-1 font-medium">{error}</p>}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    CIDR Prefix
                  </Label>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-mono font-bold">
                    /{cidr}
                  </span>
                </div>
                <Slider 
                  value={[cidr]}
                  min={0}
                  max={32}
                  step={1}
                  onValueChange={(val: number[]) => setCidr(val[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>/0</span>
                  <span>/8</span>
                  <span>/16</span>
                  <span>/24</span>
                  <span>/32</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary/80">Architecture Details</h3>
              </div>
              <ResultsDisplay results={results} title="" className="mt-0 shadow-none border-none bg-transparent" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
