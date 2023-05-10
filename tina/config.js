import { defineConfig } from "tinacms";
import { postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "a3039b21-9457-4c14-bb8f-cec4c7ef0a7a", // Get this from tina.io
  token: "4e8dac8056e9554e5373fb10333b9655df7fd741", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist/blog",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "dist",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "src/blog",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
    ],
  },
});
