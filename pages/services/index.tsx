import { getServicePage, getPages } from "@/sanity/sanity-utils";
import Header from "@/src/components/Header"; 
import Footer from "@/src/components/Footer";

// Define el tipo para las props que recibe el componente
interface Section {
  title: string;
  description: string;
  imageUrl?: string;
  items?: string[];
}
interface HeaderProps {
  pages?: Page[];
}

export async function getStaticProps() {
  // Traer los datos de la página de servicio específica
  const [data, pages] = await Promise.all([
    getServicePage(),
    getPages(), // Obtiene todas las páginas
  ]);

  // Si no se encuentra la página de servicio, puedes redirigir o manejar el caso.
  if (!data || !data.sections) {
    return {
      notFound: true,
    };
  }

  // Asegúrate de pasar la propiedad sections correctamente
  return {
    props: {
      sections: data.sections || [],
      pages, // Pasa las páginas al Header
    },
  };}

export default function ServicesPage({
  sections,
  pages,
}: {
  sections: Section[];
  pages: Page[];
}) {
  return (
    <>
      <Header pages={pages} />
      <main>
        <h1>Our Services</h1>
        {sections.map((section: Section, index: number) => (
          <div key={index}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {section.imageUrl && <img src={section.imageUrl} alt={section.title} />}
            {section.items && section.items.length > 0 && (
              <ul>
                {section.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

