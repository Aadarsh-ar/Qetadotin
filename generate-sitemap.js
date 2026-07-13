import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Read env file manually to avoid dependency on dotenv
const envPath = path.join(process.cwd(), '.env');
const processEnv = { ...process.env };
if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.substring(1, value.length - 1);
        }
        processEnv[key] = value;
      }
    });
  } catch (e) {
    console.error('Error reading .env file manually:', e);
  }
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || processEnv.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || processEnv.VITE_SUPABASE_PUBLISHABLE_KEY;

const BASE_URL = 'https://qeta.in';

const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/solutions', changefreq: 'weekly', priority: '0.8' },
  { path: '/work', changefreq: 'weekly', priority: '0.8' },
  { path: '/use-cases', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'daily', priority: '0.8' },
  { path: '/privacy', changefreq: 'monthly', priority: '0.3' },
  { path: '/terms', changefreq: 'monthly', priority: '0.3' },
];

async function generateSitemap() {
  console.log('Generating sitemap...');
  let blogUrls = [];

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('id, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts for sitemap:', error);
      } else if (posts) {
        blogUrls = posts.map(post => ({
          path: `/blog/${post.id}`,
          lastmod: new Date(post.created_at).toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: '0.6'
        }));
        console.log(`Fetched ${blogUrls.length} blog posts for sitemap.`);
      }
    } catch (e) {
      console.error('Failed to query Supabase for sitemap:', e);
    }
  } else {
    console.warn('Supabase credentials not found. Generating sitemap with static routes only.');
  }

  const currentDate = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static routes
  staticRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Dynamic blog routes
  blogUrls.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('Sitemap written successfully to public/sitemap.xml');
}

generateSitemap();
