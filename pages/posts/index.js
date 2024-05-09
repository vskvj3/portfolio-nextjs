import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <div>
      <section>
        <h1>Welcome to my Posts</h1>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
        />
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${encodeURIComponent(id)}`}>
              <span className=" text-blue-500 text-xl">{title}</span>
              </Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
