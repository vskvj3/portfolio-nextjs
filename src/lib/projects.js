import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export function getSortedProjectsData(count = 1000) {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => {
      if (!fileName.endsWith(".md")) {
        return false;
      }
      return true;
    })
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });

  // Sort by priority first (ascending - lower number = higher priority), then by date (descending)
  return allProjectsData
    .sort((a, b) => {
      // If both have priority, sort by priority (lower number first)
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority;
      }
      // If only one has priority, prioritize it
      if (a.priority !== undefined && b.priority === undefined) {
        return -1;
      }
      if (a.priority === undefined && b.priority !== undefined) {
        return 1;
      }
      // If neither has priority, sort by date (newest first)
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, count);
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => {
      if (!fileName.endsWith(".md")) {
        return false;
      }
      return true;
    })
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    });
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Raw markdown passed into slug page
  const contentMarkdown = matterResult.content;

  return {
    id,
    contentMarkdown,
    ...matterResult.data,
  };
}
