import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'NetStruct - Network Knowledge Base & Subnetting Guides',
  description: 'Technical guides, BGP routing deep dives, broadcast domain scaling tutorials, and RFC-compliant network architecture resources.',
};

export default function ArticlesRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
