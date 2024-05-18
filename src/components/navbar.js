import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black w-1/2 min-w-[400px] max-w-[600px] px-5 mx-auto my-5 py-5 rounded-md text-center text-white">
      <h1 className="text-2xl">
        <span className="blinkFrame blink">[</span>
        visakh
        <span className="blinkFrame blink">]</span>
      </h1>

      <p>
        <span className="del6s">║</span>
        <span className="del5s">▒</span>
        <span className="del4s">░</span>
        <span className="del3s">║</span>
        <span className="del2s">▒</span>
        <span className="del1s">░</span>
        <span className="del1s">░</span>
        <span className="del2s">▒</span>
        <span className="del3s">║</span>
        <span className="del4s">░</span>
        <span className="del5s">▒</span>
        <span className="del6s">║</span>
      </p>
      <h5 className="whoami">Software Engineer | Developer</h5>

      <div className="social-icons">
       
      </div>
      <hr className="pt-5 mt-5" />
    </nav>
  );
}
