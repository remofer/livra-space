import { getPage } from "@/sanity/sanity-utils";
import ContactForm from "@/src/components/ContactForm";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        {/* Renderizado del contenido */}
        {page.content.map((block: any, index: number) => {
          if (block._type === "block") {
            // Renderizar contenido textual con PortableText
            return <PortableText key={index} value={[block]} />;
          }

          if (block._type === "form") {
            // Renderizar el formulario si es un bloque de tipo "form"
            return <ContactForm key={index} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}