const { Router } = require('express');
const OpportunityController = require('./controllers/OpportunityController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Test api running');
});

routes.get('/opportunities', OpportunityController.index);
routes.get('/opportunities/daily/', OpportunityController.store);

module.exports = routes;
