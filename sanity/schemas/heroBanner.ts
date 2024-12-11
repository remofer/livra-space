import type { Rule } from "@sanity/types";

const heroBanner = {
    name: "heroBanner",
    title: "Hero Banner",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: Rule) => Rule.required().min(5).max(50),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule: Rule) => Rule.required().max(200),
      },
      {
        name: "media",
        title: "Media (Image or Video)",
        type: "object",
        fields: [
          {
            name: "type",
            title: "Media Type",
            type: "string",
            options: {
              list: [
                { title: "Image", value: "image" },
                { title: "Video", value: "video" },
              ],
            },
            validation: (Rule: Rule) => Rule.required(),
          },
          {
            name: "file",
            title: "Upload File",
            type: "file",
            options: {
              accept: "image/*,video/*",
            },
            validation: (Rule: Rule) => Rule.required(),
          },
        ],
      },
    ],
  };
  
  export default heroBanner;
  