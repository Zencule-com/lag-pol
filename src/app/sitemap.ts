import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leanagilegroep.nl'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/scrum-master`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/scrum-master-vervolg`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product-owner`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product-owner-vervolg`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
          url: `${baseUrl}/agile-coach`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${baseUrl}/agile-leiderschap`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${baseUrl}/sturen-met-obeya`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${baseUrl}/facilitator-in-obeya`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
    {
      url: `${baseUrl}/team-trajecten`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
