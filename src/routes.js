const { Router } = require('express');
const OpportunityController = require('./controllers/OpportunityController');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Test api running' });
});

routes.get('/opportunities', OpportunityController.index);

module.exports = routes;
