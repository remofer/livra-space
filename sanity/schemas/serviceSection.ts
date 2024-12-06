const serviceSection = {
    name: "serviceSection",
    title: "Service Section",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required().min(5).max(100),
      },
      {
        name: "subtitle",
        title: "Subtitle",
        type: "string",
        validation: (Rule) => Rule.required().min(5).max(100),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required().max(300),
      },
      {
        name: "services",
        title: "services",
        type: "array",
        of: [
          {
            type: "object",
            name: "service",
            title: "service",
            fields: [
              {
                name: "question",
                title: "Question",
                type: "string",
                validation: (Rule) => Rule.required().min(5).max(100),
              },
              {
                name: "answer",
                title: "Answer",
                type: "text",
                validation: (Rule) => Rule.required().max(500),
              },
            ],
          },
        ],
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
            validation: (Rule) => Rule.required().min(2).max(30),
          },
          {
            name: "url",
            title: "Button URL",
            type: "url",
            validation: (Rule) => Rule.required(),
          },
        ],
      },
    ],
  };
  
  export default serviceSection;
  