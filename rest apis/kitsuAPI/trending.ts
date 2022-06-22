// API https://kitsu.docs.apiary.io/#

import axios from "axios";

interface obj {
  attributes: {
    slug: string;
  };
}

// give trending anime
export default async function trending<T>() {
  const res = await axios.get("https://kitsu.io/api/edge/trending/anime");
  return res.data.data.reduce((concat: string, anime: obj) => {
    return typeof concat !== "object"
      ? `${concat}\n${anime.attributes.slug}`
      : "";
  });
}
