export default function sitemap() {
  const baseUrl = 'https://bedbench.com.pk';
  return ['', '/about', '/categories', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/categories' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}