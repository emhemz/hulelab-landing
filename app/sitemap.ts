import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://humanlearninglab.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/`,
      lastModified: new Date('2025-12-29'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/blog/when-speed-outruns-understanding/`,
      lastModified: new Date('2025-12-29'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog/when-intelligence-scales-faster-than-judgment/`,
      lastModified: new Date('2025-12-01'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE}/projects/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE}/larpa/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/strategic-positioning/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/product-technology/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
