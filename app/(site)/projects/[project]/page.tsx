import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

interface Page {
  title: string;
  content: any[];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const page: Page = await getPage(resolvedParams.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        {page.content.map((block: any, index: number) => {
          if (block._type === "block") {
            return <PortableText key={index} value={[block]} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}