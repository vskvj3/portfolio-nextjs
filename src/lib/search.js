import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getSortedProjectsData } from "./projects";
import { getSortedPostsData } from "./posts";

export function searchTags(tags) {
  const allProjects = getSortedProjectsData();
  const allPosts = getSortedPostsData();

    const result = {
        posts: allPosts.filter((post) => {
            return post.tags.some((tag) => tags.includes(tag));
        }),
        projects: allProjects.filter((project) => {
            return project.tags.some((tag) => tags.includes(tag));
        }),
    }

    console.log(result);

    return result;
  
}
