import resumeConfig from "../../resumeConfig.json";

export async function getServerSideProps({ params, res }) {
  const { resume } = params;

  // Only match resume_* slugs
  if (!resume.startsWith("resume_")) {
    return { notFound: true };
  }

  // Try fetching config from GitHub raw URL (main branch) first
  // Falls back to local config if fetch fails
  let config;
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/vskvj3/portfolio-nextjs/main/resumeConfig.json",
      { next: { revalidate: 0 } }
    );
    if (response.ok) {
      config = await response.json();
    }
  } catch {
    // Fetch failed, use local fallback
  }

  // Fallback to local import if remote fetch failed
  if (!config) {
    config = resumeConfig;
  }

  const entry = config[resume];
  if (!entry) {
    return { notFound: true };
  }

  // Redirect to Google Drive view
  const viewUrl = `https://drive.google.com/file/d/${entry.fileId}/view`;

  return {
    redirect: {
      destination: viewUrl,
      permanent: false,
    },
  };
}

// This component never renders because we always redirect,
// but Next.js requires a default export
export default function ResumePage() {
  return null;
}
