import Link from "next/link";

interface Page {
  _id: string;
  slug: string;
  title: string;
}

export default function Header({ pages }: { pages: Page[] }) {
  // Filtra las páginas para excluir "Get in Touch"
  const filteredPages = pages?.filter((page) => page.slug !== "get-in-touch") || [];

  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-lg font-bold">
        Livra Space
      </Link>
      <div className="flex items-center gap-5 text-sm text-gray-600">
        {filteredPages.map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
      <a
        href="/get-in-touch"
        title="Get in Touch"
        rel="noopener noreferrer"
        className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
      >
        Get in Touch
      </a>
    </header>
  );
}
