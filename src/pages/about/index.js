import Image from "next/image";
import Layout from "@/components/layout";

export default function About() {
  return (
    <div>
      <Layout>
        {" "}
        <h1>Welcome to my About</h1>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
        />
        <p>My name is Your Name. I am a software engineer.</p>
      </Layout>
    </div>
  );
}
