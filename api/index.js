// const cron = require("node-cron");
const axios = require("axios");
const express = require("express");
const app = express();
const PORT = 3000;

const performAction = () => {
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

// cron.schedule("0 22 * * *", performAction);
// cron.schedule("0 16 * * *", performAction);
// cron.schedule("0 20 * * *", performAction);
// setInterval(performAction, 10000);

app.get("/", (req, res) => {
  res.send(
    "Express server is running. Check the logs for the recurring action."
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  performAction();
});
