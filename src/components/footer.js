import { RiNextjsLine } from "react-icons/ri";

export default function Footer({ home }) {
  return (
    <footer className="bg-black/35 backdrop-blur-md w-1/2 min-w-[370px] max-w-[700px] mx-auto my-2 lg:my-5 rounded-md text-center text-white py-2">
      <span className="flex justify-center items-center text-sm lg:text-base">
        [ made with fun using<RiNextjsLine className="mx-1" />]
      </span>
    </footer>
  );
}
