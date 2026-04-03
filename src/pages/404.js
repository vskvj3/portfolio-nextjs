import Link from "next/link";
import SEO from "@/components/shared/SEO";
import { personalInfo } from "@/data/portfolioData";

export default function NotFound() {
  return (
    <>
      <SEO
        title={`404 - Page Not Found | ${personalInfo.name}`}
        description="The page you're looking for doesn't exist."
        robots="noindex"
      />

      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-7xl md:text-9xl font-bold mb-4 theme-heading"
        >
          404
        </h1>
        <p
          className="text-xl md:text-2xl font-medium mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Page Not Found
        </p>
        <p
          className="text-sm mb-8 max-w-md"
          style={{ color: "var(--text-tertiary)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="theme-btn-primary px-6 py-3">
          Go Home
        </Link>
      </div>
    </>
  );
}
