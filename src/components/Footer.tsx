import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-black shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link href="https://flowbite.com/" className="hover:underline">
              Livra Space™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/about-us" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/get-in-touch" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  