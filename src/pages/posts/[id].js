import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="bg-black w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-5 p-[20px] rounded-md text-left text-white">
        <h1 className=" text-2xl">{postData.title}</h1>
        <br />
        <div className="text-sm">
          <Date dateString={postData.date} />
        </div>
        <br />
        <div className="flex flex-wrap lg:text-sm text-xs">
          {postData.tags.split("+").map((tag) => (
            <div key={tag} className=" p-1 mr-1 mt-1 bg-[#353a57] rounded-md">
              {tag}
            </div>
          ))}
        </div>

        <hr className="py-5 mt-10" />
        <div className=" prose-sm lg:prose-base prose-ul:list-disc prose-blockquote:bg-slate-900 prose-blockquote:px-2 lg:prose-blockquote:px-5">
          <ReactMarkdown>{postData.contentMarkdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
