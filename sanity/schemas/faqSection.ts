const faqSection = {
    name: "faqSection",
    title: "FAQ Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required().min(5).max(50),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required().max(200),
      },
      {
        name: "ctaButton",
        title: "CTA Button",
        type: "object",
        fields: [
          {
            name: "url",
            title: "Button URL",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "text",
            title: "Button Text",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        name: "media",
        title: "Background Media (Image or Video)",
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
            validation: (Rule) => Rule.required(),
          },
          {
            name: "file",
            title: "Upload File",
            type: "file",
            options: {
              accept: "image/*,video/*", // Permite imágenes y videos
            },
            validation: (Rule) => Rule.required(),
          },
        ],
      },
    ],
  };
  
  export default faqSection;
  