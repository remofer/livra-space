import type { Rule } from "@sanity/types";

const serviceSection = {
    name: "serviceSection",
    title: "Service Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: Rule) => Rule.required().min(5).max(100),
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
        validation: (Rule: Rule) => Rule.required().min(5).max(100),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "ctaButton",
        title: "CTA Button",
        type: "object",
        fields: [
          {
            name: "text",
            title: "Button Text",
            type: "string",
            validation: (Rule: Rule) => Rule.required().min(2).max(30),
          },
          {
            name: "url",
            title: "Button URL",
            type: "url",
            validation: (Rule: Rule) => Rule.required(),
          },
        ],
      },
    ],
  };
  
  export default serviceSection;
  