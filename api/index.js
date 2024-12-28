const express = require("express");
const cron = require("node-cron");
const app = express();
const PORT = 3000;

const performAction = () => {
  const axios = require("axios");
  const url = "https://amiram-server.vercel.app/";
  axios
    .get(url)
    .then((response) => {
      console.log("Response from server:", response.data);
    })
    .catch((error) => {
      console.error("Error occurred while making the request:", error.message);
    });
  console.log("Action executed at:", new Date().toISOString());
};

cron.schedule("0 22 * * *", performAction);
cron.schedule("0 16 * * *", performAction);
cron.schedule("0 20 * * *", performAction);
cron.schedule("15 13 * * *", performAction);
cron.schedule("14 13 * * *", performAction);

app.get("/", (req, res) => {
  res.send("I am alive");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  performAction();
});
