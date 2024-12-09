import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

const client = createClient(clientConfig);

// Función genérica para manejar consultas
async function fetchSanityData<T>(query: string, params: Record<string, any> = {}): Promise<T> {
  return client.fetch(query, params);
}

// Consultas específicas
const queries = {
  projects: groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`,
  project: groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`,
  pages: groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current
  }`,
  page: groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`,
  heroBanner: groq`*[_type == "heroBanner"][0]{
    title,
    description,
    "mediaUrl": media.file.asset->url,
    "mediaType": media.type
  }`,
  faqSection: groq`*[_type == "faqSection"][0]{
    title,
    description,
    ctaButton {
      text,
      url
    },
    "mediaUrl": media.file.asset->url,
    "mediaType": media.type,
    faqs[] {
      question,
      answer
    }
  }`,
  serviceSection: groq`*[_type == "serviceSection"][0]{
    title,
    subtitle,
    description,
    ctaButton {
      text,
      url
    }
  }`,
  form: groq`*[_type == "form" && formType == $slug][0]{
    formType,
    fields[] {
      name,
      type,
      label,
      placeholder,
      options
    }
  }`,
};

// Funciones específicas para cada consulta
export const getProjects = () => fetchSanityData(queries.projects);
export const getProject = (slug: string) => fetchSanityData(queries.project, { slug });
export const getPage = async (slug: string) => {
  const data = await fetchSanityData(queries.page, { slug });
  console.log("getPage data:", data);
  return data;
};
export const getPages = async () => {
  const pages = await fetchSanityData(queries.pages);
  return pages || []; // Asegúrate de que siempre regrese un array, aunque esté vacío
};

export const getHeroBanner = async () => {
  return (
    (await fetchSanityData(queries.heroBanner)) || {
      title: "Default Title",
      description: "Default description for Hero Banner",
      mediaUrl: null,
      mediaType: "image",
    }
  );
};

export const getFaqSection = async () => {
  return (
    (await fetchSanityData(queries.faqSection)) || {
      title: "Frequently Asked Questions",
      description: "Here are some common questions we get asked.",
      ctaButton: { text: "Contact Us", url: "/contact" },
      mediaUrl: null,
      mediaType: "image",
      faqs: [],
    }
  );
};

export const getServiceSection = async () => {
  return (
    (await fetchSanityData(queries.serviceSection)) || {
      title: "Introduction",
      subtitle: "We design, develop and grow e‑commerce stores for some of the best in the business.",
      description: "",
      ctaButton: { text: "VIEW ALL SERVICE", url: "/service" },
    }
  );
};

export const getForm = async (slug: string) => {
  return (
    (await fetchSanityData(queries.form, { slug })) || {
      formType: "contact",
      fields: [
        { name: "name", type: "text", label: "Your Name", placeholder: "Enter your name" },
        { name: "email", type: "email", label: "Your Email", placeholder: "Enter your email" },
        { name: "message", type: "textarea", label: "Your Message", placeholder: "Enter your message" },
      ],
    }
  );
};

export async function getServicePage() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "servicePage"][0]{
      title,
      description,
      sections[] {
        title,
        description,
        "imageUrl": image.asset->url,
        items
      }
    }`
  );
}