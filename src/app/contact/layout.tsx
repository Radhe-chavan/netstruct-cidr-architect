import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'NetStruct - Technical Support & Engineering Inquiry',
  description: 'Get in touch with our engineering team for technical support, tool feedback, or general network planning inquiries.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
