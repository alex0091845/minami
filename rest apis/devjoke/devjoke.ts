// API https://www.devjoke.app/

import axios from "axios";

// give joke
export default async function devjoke<T>() {
  const res = await axios.get(
    "https://backend-omega-seven.vercel.app/api/getjoke"
  );
  return `${res.data[0].question}\n\n${res.data[0].punchline} :joy:`;
}
