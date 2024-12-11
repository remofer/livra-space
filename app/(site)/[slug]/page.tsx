import { getPage } from "@/sanity/sanity-utils";
import ContactForm from "@/src/components/ContactForm";
import { PortableText } from "@portabletext/react";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const page = await getPage(resolvedParams.slug);

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
          if (block._type === "form") {
            return <ContactForm key={index} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}