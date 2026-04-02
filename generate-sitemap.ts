import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import path from 'node:path';

const pages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 }
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
