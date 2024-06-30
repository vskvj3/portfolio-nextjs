import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "@/components/date";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/posts/codeblock";

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
      <div className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] h-auto mx-auto mb-2 lg:mb-5 p-[20px] rounded-md text-left text-dracula-t-white">
        <h1 className=" text-2xl">{postData.title}</h1>
        <br />
        <div className="text-sm">
          <Date dateString={postData.date} />
        </div>
        <br />
        <div className="flex flex-wrap lg:text-sm text-xs">
          {postData.tags.map((tag) => (
            <Link key={tag} href={`/search?tags=${encodeURIComponent(tag)}`}>
              <div className="p-1 mr-1 mt-1 bg-dracula-chips hover:bg-dracula-chips/80 rounded-md">
                {tag}
              </div>
            </Link>
          ))}
        </div>

        <hr className="py-5 mt-10" />
        <div className=" prose-sm lg:prose-base prose-ul:list-disc prose-ol:list-decimal prose-ol:pl-10 prose-blockquote:px-2 prose-blockquote:bg-dracula-chips/30 prose-blockquote:border-l-8 prose-blockquote:border-l-dracula-chips/80  lg:prose-blockquote:px-5 prose-pre:px-0  prose-pre:text-base prose-pre:my-0 prose-pre:py-0 prose-img:mb-0.5">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="markdown-body"
            components={{
              img: (props) => (
                <Image
                  src={props.src}
                  alt={props.alt}
                  width={100}
                  height={100}
                />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <CodeBlock node={node} inline={inline} className={className} match={match} {...props} >{children} </CodeBlock>
                ) : (
                  <code>{children}</code>
                );
              },
            }}
          >
            {postData.contentMarkdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
