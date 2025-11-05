/* eslint-disable camelcase */
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LOFI MUSIC",
    short_name: "LOFI MUSIC",
    start_url: "/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#000000",
    icons: [
      {
        src: "/images/icons-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icons-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
