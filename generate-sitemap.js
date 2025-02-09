import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/dombra-satin-al', changefreq: 'daily', priority: 0.9 },
    { url: '/urun', changefreq: 'daily', priority: 0.8 },
    { url: '/hakkimizda', changefreq: 'monthly', priority: 0.6 },
    { url: '/sss', changefreq: 'monthly', priority: 0.5 }
];
async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://www.yatagundombra.com' });
    const writeStream = createWriteStream(path.resolve('dist/sitemap.xml'), { encoding: 'utf-8' }); // Encoding ekledik
    sitemap.pipe(writeStream);
    pages.forEach((page) => sitemap.write(page));
    sitemap.end();
    await streamToPromise(sitemap);
    console.log('✅ Sitemap başarıyla XML formatında oluşturuldu!');
}
generateSitemap().catch(console.error);
