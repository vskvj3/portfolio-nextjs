import { useRouter } from "next/router";
import Link from "next/link";
import SEO from "@/components/shared/SEO";
import { personalInfo } from "@/data/portfolioData";
import resumeConfig from "@/data/resumeConfig.json";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";

export async function getStaticPaths() {
  const slugs = Object.keys(resumeConfig);
  const paths = slugs.map((slug) => ({ params: { resume: slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { resume } = params;
  const config = resumeConfig[resume];

  if (!config) {
    return { notFound: true };
  }

  return {
    props: {
      slug: resume,
      fileId: config.fileId,
      title: config.title,
      description: config.description,
      fileName: config.fileName,
    },
  };
}

export default function ResumePage({ slug, fileId, title, description, fileName }) {
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;

  return (
    <>
      <SEO
        title={`${title} | Resume`}
        description={description}
        robots="noindex, nofollow"
      />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8fafc",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Header Bar */}
        <header
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #e2e8f0",
            padding: "0.75rem 1.5rem",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {/* Left: Back + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 0 }}>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "#64748b",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                <ArrowLeft size={16} />
                Portfolio
              </Link>

              <div
                style={{
                  width: "1px",
                  height: "24px",
                  backgroundColor: "#e2e8f0",
                }}
              />

              <div style={{ minWidth: 0 }}>
                <h1
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    margin: 0,
                  }}
                >
                  {personalInfo.name}
                </p>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#475569",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#cbd5e1";
                  e.currentTarget.style.backgroundColor = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">Open in Drive</span>
              </a>

              <a
                href={downloadUrl}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#fff",
                  backgroundColor: "#2563eb",
                  border: "1px solid #2563eb",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1d4ed8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2563eb";
                }}
              >
                <Download size={14} />
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>
        </header>

        {/* PDF Viewer */}
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: "1rem",
          }}
        >
          <iframe
            src={previewUrl}
            title={title}
            style={{
              flex: 1,
              width: "100%",
              border: "none",
              borderRadius: "0.5rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#fff",
              minHeight: "calc(100vh - 100px)",
            }}
            allow="autoplay"
          />
        </div>
      </div>
    </>
  );
}
