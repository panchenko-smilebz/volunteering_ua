export default async function sitemap() {
  return [
    {
      url: 'https://vitaliypanchenko.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
