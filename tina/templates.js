export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "image",
      name: "cover",
      label: "Cover",
    },
    {
      type: "string",
      name: "cover_alt",
      label: "Cover alt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "eleventyExcludeFromCollections",
      label: "Draft",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
  ];
}
