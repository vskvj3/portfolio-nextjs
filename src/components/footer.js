import { RiNextjsLine } from "react-icons/ri";

export default function Footer({ home }) {
  return (
    <footer className="bg-dracula-foreground/35 backdrop-blur-md min-w-[370px] mx-10 my-2 lg:my-5 rounded-md text-center text-dracula-t-white py-2">
      <span className="flex justify-center items-center text-sm lg:text-base">
        [ made with fun using<RiNextjsLine className="mx-1" />]
      </span>
    </footer>
  );
}
