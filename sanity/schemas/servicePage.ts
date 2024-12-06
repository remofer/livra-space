const servicePage = {
    name: "servicePage",
    title: "Service Page",
    type: "document",
    fields: [
      {
        name: "sections",
        title: "Sections",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "title", title: "Title", type: "string" },
              { name: "description", title: "Description", type: "text" },
              {
                name: "image",
                title: "Image",
                type: "image",
                options: { hotspot: true },
              },
              {
                name: "items",
                title: "Items",
                type: "array",
                of: [{ type: "string" }],
              },
            ],
          },
        ],
      },
    ],
  };
  
  export default servicePage;
  