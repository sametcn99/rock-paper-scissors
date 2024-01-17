import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rock, Paper, Scissor",
    short_name: "Rock Paper Scissor",
    dir: "auto",
    description: "Generated by create next app",
    categories: ["personal"],
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    scope: "/",
    lang: "en_US",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.png",
        sizes: "300x300",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "300x300",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
