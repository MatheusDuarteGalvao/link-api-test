const pipedrive = require('../helpers/pipedrive');
require('dotenv/config');

const opportunityRepository = require('../repositories/OpportunityRepository');

const storeOrderService = require('../services/storeOrderService');

module.exports = {
  async index(request, response) {
    try {

      const deals = await pipedrive.get(
        `/deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_TOKEN}`,
      );

      const { data } = deals.data;

      console.log(data);

      const orders = await storeOrderService.store(data);

      await opportunityRepository.storeOpportunity(orders);

      const groupOrders = await opportunityRepository.groupOpportunitiesByDate();

      return response.status(200).json(groupOrders);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
