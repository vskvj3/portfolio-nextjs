import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src="/images/moon.gif" alt="Moon" width={100} height={100} />
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg">
          Oops! The page you are looking for does not exist.
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="px-4 py-2 bg-slate-600 text-black rounded-md hover:bg-slate-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
