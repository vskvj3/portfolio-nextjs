import Link from "next/link";
import { FaGithub, FaLinkedin, FaTree } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-dracula-foreground/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] px-5 mx-auto my-2 lg:my-5  py-5 rounded-md text-center text-dracula-t-white">
      <Link href={"/"}>
        <h1 className="text-2xl font-extrabold">
          [visakh]
        </h1>
      </Link>
{/* 
      <p className="">
        <span className="del6s mr-2.5">║</span>
        <span className="del5s mr-2.5">▒</span>
        <span className="del4s mr-2.5">░</span>
        <span className="del3s mr-2.5">║</span>
        <span className="del2s mr-2.5">▒</span>
        <span className="del1s mr-2.5">░</span>
        <span className="del1s mr-2.5">░</span>
        <span className="del2s mr-2.5">▒</span>
        <span className="del3s mr-2.5">║</span>
        <span className="del4s mr-2.5">░</span>
        <span className="del5s mr-2.5">▒</span>
        <span className="del6s">║</span>
      </p> */}
      <h5 className="whoami text-sm font-bold">
        Software Engineer | Developer
      </h5>

      <div className="social-icons flex justify-center gap-5 mt-5">
        <Link href={"https://github.com/vskvj3"}>
          <FaGithub size={20} />
        </Link>
        <Link href={"https://in.linkedin.com/in/visakhvj3"}>
          <FaLinkedin size={20} />
        </Link>
        <Link href={""}>
          <FaTree size={20} />
        </Link>
      </div>
      {/* <Link href={"/about"}>
      <div className="my-2 py-2  bg-slate-600 hover:bg-slate-500 rounded-md w-auto">
        About Me
      </div>
      </Link> */}
      <hr className="pt-5 mt-5" />
    </nav>
  );
}
