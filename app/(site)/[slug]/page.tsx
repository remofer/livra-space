import { getPage } from "@/sanity/sanity-utils";
import ContactForm from "@/src/components/ContactForm";
import { PortableText } from "@portabletext/react";

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const page = await getPage(resolvedParams.slug);

  return (
    <div className="flex flex-col gap-8 m-8">
      <h1 className="text-8xl font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg">
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