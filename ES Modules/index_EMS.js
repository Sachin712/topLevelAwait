import {getAPIResponse} from "./getAPIRespose_ESM.js";

const url = "https://jsonplaceholder.typicode.com/posts";

try {
  const res = await getAPIResponse(url);
  console.log("Top level await response:", res);
} catch (error) {
  console.error("Error in Top level await response:", error);
}
