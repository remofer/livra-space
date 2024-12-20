import { Rule } from "sanity";

const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "",
      validation: (Rule: Rule) => Rule.max(60),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "form" },
      ],
    },
  ],
};

export default page;