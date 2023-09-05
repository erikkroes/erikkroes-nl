import { defineConfig } from "tinacms";
import { postFields } from "./templates";
import * as dotenv from 'dotenv' 
dotenv.config
console.log(process.env) 

const { TINA_CLIENTID } = process.env
const { TINA_TOKEN } = process.env

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: TINA_CLIENTID, // Get this from tina.io
  token: TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
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
