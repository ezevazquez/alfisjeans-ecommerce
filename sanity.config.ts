import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Goworks to https://www.sanity.io/docs/api-versioning to learn how API versioning
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
  
  ],
  // tools: (prev, { currentUser }) => {
  //   const isAdmin = currentUser?.roles.some(
  //     (role) => role.name === "administrator"
  //   );
  //   return isAdmin ? prev : prev.filter((tool) => tool.name !== "vision");
  // },
});
