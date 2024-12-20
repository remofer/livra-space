import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

const client = createClient(clientConfig);

interface HeroBanner {
  mediaType: 'image' | 'video';
  mediaUrl: string;
  title: string;
  description: string;
}

interface CtaButton {
  text: string;
  url: string;
}

interface FaqSection {
  mediaUrl: string;
  mediaType: 'image' | 'video';
  title: string;
  description: string;
  faqs: Faq[];
  ctaButton: CtaButton;
}

interface ServiceSection {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: CtaButton;
  items: string[];
}

interface Faq {
  question: string;
  answer: string;
}

async function fetchSanityData<T>(query: string, params: Record<string, any> = {}): Promise<T> {
  return client.fetch(query, params);
}

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
    "slug": slug.current,
    metaTitle
  }`,
  page: groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    metaTitle,
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
    items,
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

export const getProjects = () => fetchSanityData(queries.projects);
export const getProject = (slug: string) => fetchSanityData(queries.project, { slug });
export async function getPage(slug: string): Promise<{ title: string; content: any[] }> {
  const query = groq`*[_type == "page" && slug.current == $slug][0]{
    title,
    content
  }`;

  const result = await fetchSanityData<{ title: string; content: any[] }>(query, { slug });

  if (result) {
    return {
      title: result.title || "Default Title",
      content: result.content || [],
    };
  }

  throw new Error(`Page with slug "${slug}" not found.`);
}

export const getPages = async (): Promise<{ _id: string; slug: string; title: string; metaTitle: string }[]> => {
  const pages = await fetchSanityData<{ _id: string; slug: string; title: string; metaTitle: string }[]>(queries.pages);

  return pages.map((page) => ({
    _id: page._id,
    slug: page.slug,
    title: page.title,
    metaTitle: page.metaTitle || page.title,
  }));
};

export const getHeroBanner = async (): Promise<HeroBanner | null> => {
  const result = await fetchSanityData<HeroBanner>(queries.heroBanner);

  if (result) {
    return {
      mediaType: result.mediaType,
      mediaUrl: result.mediaUrl,
      title: result.title,
      description: result.description,
    };
  }


  return null;
};

export const getFaqSection = async (): Promise<FaqSection | null> => {
  const result = await fetchSanityData<FaqSection>(queries.faqSection);

  if (result && "mediaUrl" in result && "mediaType" in result) {
    return {
      mediaUrl: result.mediaUrl || "",
      mediaType: result.mediaType || "image",
      title: result.title || "Default Title",
      description: result.description || "Default Description",
      faqs: result.faqs || [],
    };
  }

  return null;
};

export const getServiceSection = async (): Promise<ServiceSection | null> => {
  const result = await fetchSanityData<ServiceSection>(queries.serviceSection);

  if (result && "title" in result && "subtitle" in result && "ctaButton" in result) {
    return {
      title: result.title || "Default Title",
      subtitle: result.subtitle || "Default Subtitle",
      description: result.description || "Default Description",
      ctaButton: {
        text: result.ctaButton?.text || "Learn More",
        url: result.ctaButton?.url || "#",
      },
      items: result.items || [],
    };
  }

  return null;
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