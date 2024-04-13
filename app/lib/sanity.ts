import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../sanity/env";
import urlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = urlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}