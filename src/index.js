const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { connect } = require('./database/connection');
require('dotenv/config');

connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
