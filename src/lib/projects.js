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
    .slice(0, count)
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

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
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
