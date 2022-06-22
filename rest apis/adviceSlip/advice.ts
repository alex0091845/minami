// API https://api.adviceslip.com/

import axios from "axios";

// give advice
export default async function advice<T>() {
  const res = await axios.get("https://api.adviceslip.com/advice");
  return res.data.slip.advice;
}
