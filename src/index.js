const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

console.log(process.env.BLING_TOKEN);

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

module.exports = app;
