const form = {
    name: "form",
    title: "Form",
    type: "object",
    fields: [
      {
        name: "formType",
        title: "Form Type",
        type: "string",
        options: {
          list: [{ title: "Contact Form", value: "contact" }],
        },
      },
    ],
  };
  
export default form;
  