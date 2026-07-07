import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable for the site URL or fallback to a standard domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://netstruct-cidr-architect.web.app';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/legal/privacy-policy',
    '/legal/disclaimer',
    '/legal/rights',
    '/articles',
  ];

  const articleSlugs = [
    'ipv4-overlap-aws-gcp',
    'cidr-history-evolution',
    'broadcast-domain-scaling',
    'ipv6-transition-strategies',
    'bgp-routing-fundamentals',
    'vlsm-subnetting-guide',
    'osi-model-modern-perspective',
    'nat-deep-dive',
    'dmz-subnet-design',
    'routing-loop-troubleshooting',
    'anycast-vs-unicast',
    'mpls-vs-sdwan',
    'subnetting-iot-deployments',
    'vlan-trunking-best-practices',
    'qos-congested-networks',
  ];

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articleUrls = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...articleUrls];
}
