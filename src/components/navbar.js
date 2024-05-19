import Link from "next/link";
import { FaGithub, FaLinkedin, FaTree } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-black w-1/2 min-w-[400px] max-w-[600px] px-5 mx-auto my-5 py-5 rounded-md text-center text-white">
      <h1 className="text-2xl font-extrabold">
        <span className="blinkFrame blink">[</span>
        visakh
        <span className="blinkFrame blink">]</span>
      </h1>

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
      </p>
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
        <Link href={"https://github.com/vskvj3"}>
          <FaTree size={20} />
        </Link>
      </div>
      <hr className="pt-5 mt-5" />
    </nav>
  );
}
