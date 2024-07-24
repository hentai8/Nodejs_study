const axios = require("axios");
async function getBlocks() {
  let data = "";

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://23.20.9.85:12973/blockflow/blocks-with-events/0000000000000136faf21f8d8ad71e9554e0e8dd27b35ca398ae797748817a43",
    headers: {
      "x-api-key":
        "xxx",
    },
    data: data,
  };

  return axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      
      // console.log("!!!!error", error);
      console.log("!!!!error", error.response.status);
      if (error.response.status === 500) {
        console.log(`Block  is not exist`);
        return error;
      }
      return error;
    });
}

// getBlocks().then(data => {
//     console.log('Data from getBlocks:', data);
//   }).catch(error => {
//     console.log('Error from getBlocks:', error);
//   });

async function main() {
  try {
    const info = await getBlocks();
    console.log("!!!!Error from getBlocks:", info);
  } catch (error) {
    console.log("!!!!Error from getBlocks:", error);
  }
}

main().catch((error) => {
  console.log("Error from getBlocks:", error);
});
