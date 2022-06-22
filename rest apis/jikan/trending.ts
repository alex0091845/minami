// API https://docs.api.jikan.moe/

import axios from "axios";

interface obj {
  title: string;
}

// give trending anime
export default async function trending<T>() {
  const res = await axios.get(
    "https://api.jikan.moe/v4/top/anime?filter=airing&limit=15"
  );

  const data = res.data.data;
  let trending = "";
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].title);
    trending = trending + data[i].title + "\n";
  }

  return trending;
}
