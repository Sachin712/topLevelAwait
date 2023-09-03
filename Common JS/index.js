const getAPIResponse = require("./getAPIRespose");

const url = "https://jsonplaceholder.typicode.com/posts";

//main function that calls getAPIResponse function
async function main() {
  try {
    const res = await getAPIResponse(url);
    console.log("Main function response:", res);
  } catch (error) {
    console.error("Error in main function response:", error);
  }
}

main();
