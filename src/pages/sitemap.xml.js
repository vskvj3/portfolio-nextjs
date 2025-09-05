import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from '../lib/projects'

function generateSiteMap(posts, projects) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Static pages -->
     <url>
       <loc>https://your-domain.com</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://your-domain.com/projects</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://your-domain.com/posts</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://your-domain.com/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <!-- Dynamic project pages -->
     ${projects
       .map((project) => {
         return `
       <url>
           <loc>https://your-domain.com/projects/${project.id}</loc>
           <lastmod>${new Date(project.date).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join('')}
     <!-- Dynamic post pages -->
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>https://your-domain.com/posts/${post.id}</loc>
           <lastmod>${new Date(post.date).toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Get all posts and projects
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();

  // Generate the XML sitemap
  const sitemap = generateSiteMap(allPostsData, allProjectsData);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
