const axios = require("axios");
async function getBlocks() {
  let data = "";

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:12973/blockflow/blocks-with-events/xxx",
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
      console.log("!!!!error", error);
      return error;
    });
}

// getBlocks().then(data => {
//     console.log('Data from getBlocks:', data);
//   }).catch(error => {
//     console.log('Error from getBlocks:', error);
//   });

async function main() {
  const info = await getBlocks();
  console.log(info);
}

main().catch((error) => {
  console.log("Error from getBlocks:", error);
});
