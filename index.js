const express = require('express');
const { resolve } = require('path');
const { connectDB } = require('./database/db');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.db_url;
const port = process.env.PORT || 3010;

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);

  try {
    await connectDB(url);
    console.log(`the server is running on port: ${port}`);
  } catch (err) {
    console.log(`Error connecting to database: ${err.message}`);
  }
});

