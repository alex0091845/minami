// API https://github.com/sameerkumar18/corporate-bs-generator-api

import axios from "axios";

// give bull
export default async function bs<T>() {
  const res = await axios.get(
    "https://corporatebs-generator.sameerkumar.website/"
  );
  return res.data.phrase;
}
