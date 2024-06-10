import { RiNextjsLine } from "react-icons/ri";

export default function Footer({ home }) {
  return (
    <footer className="bg-black w-1/2 min-w-[370px] max-w-[700px] mx-auto mb-2 lg:mb-5 mt-5 rounded-md text-center text-white py-2">
      <span className="flex justify-center items-center">
        [ made with fun using<RiNextjsLine className="mx-1" />]
      </span>
    </footer>
  );
}
