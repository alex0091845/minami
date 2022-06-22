// API https://uselessfacts.jsph.pl/

import axios from "axios";

// give random fact
export default async function random<T>() {
  const res = await axios.get(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  return res.data.text;
}
