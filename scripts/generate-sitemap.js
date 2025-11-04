const fs = require('fs');
const path = require('path');

// Read homepage from package.json if available
const pkgPath = path.join(__dirname, '..', 'package.json');
let homepage = 'http://localhost';
try {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg.homepage) homepage = pkg.homepage.replace(/\/$/, '');
} catch (e) {
  // ignore and use default
}

// List of public routes to include in the sitemap
const routes = [
  '/',
  '/liste-exposants',
  '/exposants',
  '/partenaires',
  '/contact',
  '/programme',
  '/presse',
  '/infos-pratiques',
  '/pass-premium',
  '/mentions-legales',
  '/confidentialite'
];

const now = new Date().toISOString();

const urlset = routes
  .map((route) => {
    const loc = `${homepage}${route === '/' ? '' : route}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap written to ${outPath} (${routes.length} urls)`);
