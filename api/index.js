const express = require('express');
const cron = require('node-cron');
const app = express();
const PORT = 3000;

const performAction = () => {
  console.log('Action executed at:', new Date().toISOString());
};

cron.schedule('0 22 * * *', performAction); 
cron.schedule('0 16 * * *', performAction); 
cron.schedule('0 20 * * *', performAction); 

app.get('/', (req, res) => {
  res.send('I am alive');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  performAction();
});
