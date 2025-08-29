import { RiNextjsLine } from "react-icons/ri";

export default function Footer({ home }) {
  return (
    <footer className="bg-slate-900 text-gray-300 w-full py-4 md:py-6 mt-4 md:mt-8">
      <div className="container mx-auto px-6 text-center">
        <span className="flex justify-center items-center text-sm lg:text-base">
          [ made with fun using<RiNextjsLine className="mx-1" />]
        </span>
      </div>
    </footer>
  );
}
