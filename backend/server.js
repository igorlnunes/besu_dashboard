const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

const BESU_RPC_URL = "http://127.0.0.1:8545";

// block route
app.get("/blockNumber", async (req, res) => {
  try {
    const response = await axios.post(BESU_RPC_URL, {
      jsonrpc: "2.0",
      method: "eth_blockNumber",
      params: [],
      id: 1,
    });
    res.json({ blockNumber: parseInt(response.data.result, 16) });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}) 