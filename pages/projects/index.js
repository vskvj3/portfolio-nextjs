import Image from "next/image";
import { getSortedProjectsData } from "@/lib/projects";
import Link from "next/link";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({ allProjectsData }) {
  return (
    <div>
      <section>
        <h1>Welcome to my Projects</h1>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
        />
        <ul>
          {allProjectsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/projects/${encodeURIComponent(id)}`}>
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
