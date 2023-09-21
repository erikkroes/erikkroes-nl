import { defineConfig } from "tinacms";
import * as dotenv from 'dotenv' 
dotenv.config

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
      mediaRoot: "assets/media",
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
        ],
      },
      {
        format: "md",
        label: "Notes",
        name: "notes",
        path: "src/notes",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "alt",
            label: "Text alternative",
          },
          {
            type: "boolean",
            name: "formal",
            label: "LinkedIn?",
          },
          {
            type: "boolean",
            name: "image_note",
            label: "Image note?",
          },
          {
            type: "boolean",
            name: "publish",
            label: "Publish?",
          },
        ],
      },
    ],
  },
});
