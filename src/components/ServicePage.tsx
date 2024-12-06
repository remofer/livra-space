// import { getServicePage } from "@/sanity/sanity-utils";

// export async function getStaticProps() {
//     const data = await getServicePage();
  
//     // Verifica los datos que obtienes de Sanity
//     console.log('Service data:', data);
  
//     if (!data || !data.sections) {
//       return {
//         notFound: true,
//       };
//     }
  
//     return { props: { sections: data.sections || [] } };
//   }

//   export default function ServicesPage({ sections }: { sections: Section[] }) {
//     if (!sections || sections.length === 0) {
//       return <div>No service sections found.</div>;  // O un mensaje de carga
//     }
  
//     return (
//       <main>
//         <h1>Our Services</h1>
//         {sections.map((section: Section, index: number) => (
//           <div key={index}>
//             <h2>{section.title}</h2>
//             <p>{section.description}</p>
//             {section.imageUrl && <img src={section.imageUrl} alt={section.title} />}
//             {section.items && section.items.length > 0 && (
//               <ul>
//                 {section.items.map((item: string, i: number) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </main>
//     );
//   }
  