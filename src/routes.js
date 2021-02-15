const { Router } = require('express');
const OpportunityController = require('./controllers/OpportunityController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Test api running');
});

routes.get('/opportunities', OpportunityController.index);

module.exports = routes;
