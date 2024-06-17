// pages/search.js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { searchTags } from "../lib/search";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { tags } = context.query;

  let initialResults = [];
  if (tags) {
    const tagArray = tags.split(" ");
    initialResults = searchTags(tagArray);
  }

  return {
    props: {
      initialResults,
    },
  };
}

const SearchPage = ({ initialResults }) => {
  const router = useRouter();
  const { tags } = router.query;
  const [results, setResults] = useState(initialResults);

  //   useEffect(() => {
  //     if (tags) {
  //       const tagArray = tags.split(" ");
  //       const filteredResults = searchTags(tagArray);
  //       setResults(filteredResults);
  //     }
  //   }, [tags]);

  return (
    <section className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[10px] lg:p-[20px] rounded-md text-left text-dracula-t-white">
      <div>
        {/* advanced filtering section with selection of tags and type(post or project) and search button */}
        {/* <div className="">
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search for tags"
              className="bg-dracula-cards/10 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5 w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <select
              name="type"
              id="type"
              className="bg-dracula-cards/10 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5 w-full"
            >
              <option value="posts">Posts</option>
              <option value="projects">Projects</option>
            </select>
          </div>
          <div className="w-full">
            <button className="bg-dracula-cards/10 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5 w-full">
              Search
            </button>
          </div>
        </div> */}
      </div>
      <div>
      <p className=" text-center pb-3 lg:text-lg">[Search Results]</p>
        <div>
          {results.projects.length > 0 ? (
            <ul>
              <p className=" text-center pb-3 lg:text-md">[Projects]</p>
              {results.projects.map(({ id, date, tags, title }) => (
                <Link key={id} href={`/projects/${encodeURIComponent(id)}`}>
                  <li className="bg-dracula-cards/10 hover:bg-dracula-cards/20 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
                    <span className=" text-blue-500 text-md lg:text-lg">
                      {title}
                    </span>
                    <br />
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="lg:text-sm text-xs p-1 mr-1 mt-1 bg-[#353a57] rounded-md"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p className="bg-dracula-cards/10 text-center text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
              No Projects found.
            </p>
          )}
        </div>
        <div>
          {results.posts.length > 0 ? (
            <ul>
              <p className=" text-center pb-3 lg:text-md">[Posts]</p>
              {results.posts.map(({ id, date, tags, title }) => (
                <Link key={id} href={`/posts/${encodeURIComponent(id)}`}>
                  <li className="bg-dracula-cards/10 hover:bg-dracula-cards/20 text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
                    <span className=" text-blue-500 text-md lg:text-lg">
                      {title}
                    </span>
                    <br />
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="lg:text-sm text-xs p-1 mr-1 mt-1 bg-[#353a57] rounded-md"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p className="bg-dracula-cards/10 text-center text-[#f8f8f2] h-auto p-2 lg:p-5 rounded-md mb-5">
              No Posts found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
