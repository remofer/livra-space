import { PortableText } from "@portabletext/react";
import { getPage, getPages, getServicePage } from "@/sanity/sanity-utils";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";

interface Section {
  title: string;
  description: string;
  imageUrl?: string;
  items?: string[];
}
interface ServicesPageProps {
  title: string;
  content: any[];
  sections: Section[];
  pages: any[];
}

export async function getStaticProps() {
  const slug = "services";
  const [pageData, pages, servicePageData] = await Promise.all([
    getPage(slug),
    getPages(),
    getServicePage(),
  ]);

  if (!pageData) return { notFound: true };

  return {
    props: {
      title: pageData.title || "Default Title",
      content: pageData.content || [],
      sections: servicePageData.sections || [],
      pages,
    },
  };
}

export default function ServicesPage({
  title,
  content,
  sections,
  pages,
}: ServicesPageProps) {
  return (
    <>
      <Header pages={pages} />
      <main className="bg-gray-100">
        <div className="flex flex-col gap-8 p-8">
          <div className="flex gap-10">
            <h1 className="text-3xl font-outfit font-bold">{title}</h1>

            <div className="font-outfit text-2xl w-5/12 prose">
              <PortableText value={content} />
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <section key={index} className="section">
                <h2 className="font-semibold text-[102px]">{section.title}</h2>
                <p className="text-lg">{section.description}</p>

                {section.imageUrl && (
                  <Image
                    src={section.imageUrl}
                    alt={section.title}
                    className="my-4 rounded-lg"
                  />
                )}

                {section.items?.length && (
                  <ul className="list-disc list-inside">
                    {section.items.map((item, i) => (
                      <li className="list-none" key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}