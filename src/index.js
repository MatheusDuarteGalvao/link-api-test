const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(routes);

app.listen(3333);

