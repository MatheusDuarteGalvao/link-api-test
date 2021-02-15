const Opportunity = require('../models/Opportunity');

module.exports = {
  async storeOpportunity(orders) {
    const ordersStore = await orders.map(async (order) => {
      const { numero, idPedido, value, orgName } = order;

      const orderStore = await order.create({
        numero,
        idPedido,
        value,
        orgName,
      });

      return orderStore;
    });
    return ordersStore;
  },

  async groupOpportunitiesByDate() {
    const orders = await Opportunity.aggregate([
      {
        $sort: {
          value: -1,
          numero: 1,
        },
      },
      {
        $project: {
          numero: '$numero',
          idPedido: '$idPedido',
          value: '$value',
          orgName: '$orgName',
          date: { $dateToString: { format: '%d/%m/%Y', date: '$createdAt' } },
        },
      },
      {
        $group: {
          _id: '$date',
          opportunities: {
            $push: '$$ROOT',
          },
        },
      },
    ]);
    return orders;
  }
};
