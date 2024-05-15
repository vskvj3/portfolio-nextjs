import Link from "next/link";

export default function Footer({home}) {
  return (
    <nav>
      <div className="w-full h-10 bg-gray-600/50 backdrop-blur-2xl sticky bottom-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <p className="text-black text-2xl font-bold">Logo</p>
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <p className="md:hidden text-white">Menu</p>
          </div>
          {!home && (
          <div>
            <Link href="/">← Back to home</Link>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}
