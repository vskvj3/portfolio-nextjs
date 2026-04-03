import Head from "next/head";
import { personalInfo } from "@/data/portfolioData";
import { useRouter } from "next/router";

export default function SEO({
  title,
  description,
  image,
  type = "website",
  schemaData = null,
  children,
  robots = "index, follow",
}) {
  const router = useRouter();
  const siteUrl = "https://visakhvijay.fyi";
  const ogUrl = `${siteUrl}${router.asPath}`;
  const ogImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : `${siteUrl}/images/profile.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* General Settings */}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={ogUrl} />
      
      {/* Structured Data (JSON-LD) */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      {children}
    </Head>
  );
}
