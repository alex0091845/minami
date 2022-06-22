// API https://icanhazdadjoke.com/api

import axios from "axios";

interface obj {
  attributes: {
    slug: string;
  };
}

// give joke
export default async function joke<T>() {
  const res = await axios.get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent":
        "minami discord bot (https://github.com/alex0091845/minami)",
    },
  });
  return res.data.joke;
}
