"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

interface Page {
  _id: string;
  slug: string;
  title: string;
  metaTitle: string;
}

export default function Header({ pages }: { pages: Page[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const filteredPages = pages?.filter((page) => page.slug !== "get-in-touch") || [];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
    className={`w-full ${isScrolled ? "shadow-md" : ""} sticky top-0 bg-white z-50`}
    >
      <div className="py-8 px-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold cursor-pointer">
          Livra Space
        </Link>

        <div className="flex items-center gap-5">
          {filteredPages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="hover:underline underline-offset-8"
            >
              {page.metaTitle}
            </Link>
          ))}
          <Link
            href="/get-in-touch"
            title="Get in Touch"
            rel="noopener noreferrer"
            className="border border-black text-black bg-white font-medium rounded-full text-sm px-5 py-2.5 me-2 hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
