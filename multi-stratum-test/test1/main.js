const crypto = require("crypto");
const axios = require("axios");

async function depositDxpoolWallet(params) {
  const timestamp = Math.floor(Date.now() / 1000);
  const secret = "xxx";
  const dxpoolApi = "https://xxx.dxpool.in/api";

  // const hash0 = crypto.createHmac("sha256", "123456abc").update(`timestamp=123456789`).digest("hex");
  // console.log(hash0);
  // console.log(Buffer.from(hash0).toString("base64"));

  const hash = crypto
    .createHmac("sha256", secret)
    .update(`timestamp=${timestamp}`)
    .digest("hex");
  const encoded = Buffer.from(hash).toString("base64");
  console.log(hash);
  console.log(encoded);

  const url = `${dxpoolApi}/address-mining/deposit?timestamp=${timestamp}&sig=${encoded}`;

  const config0 = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(params),
  };

  try {
    const response = await axios(config0);
    console.log(JSON.stringify(response.data));
    console.log(JSON.stringify(response.status));
  } catch (error) {
    console.error(error);
  }
}
const params = {
  account: "li116",
  currency: "alph",
  amount: 10,
  txid: "123",
  fee: "1"
};

depositDxpoolWallet(params)
  .then(() => console.log("Deposit successful"))
  .catch((err) => console.error("Error depositing to Dxpool wallet:", err));
