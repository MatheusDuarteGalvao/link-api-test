const { generate } = require('gerador-validador-cpf');
const jsontoxml = require('jsontoxml');
const bling = require('../helpers/bling');

module.exports = {
  async store(opportunities) {
    const opportunitiesStore = opportunities.map(async (opportunity) => {
      const xmlOrder = jsontoxml(
        {
          pedido: [
            {
              name: 'cliente',
              children: [
                {
                  name: 'nome',
                  text: opportunity.org_id.name || 'svribeiroORG',
                },
                {
                  name: 'cpf_cnpj',
                  text: generate(),
                },
              ],
            },
            {
              name: 'itens',
              children: [
                {
                  name: 'item',
                  children: [
                    { name: 'codigo', text: 1 },
                    { name: 'descricao', text: 'deal' },
                    { name: 'qtde', text: 1 },
                    { name: 'vlr_unit', text: opportunity.value },
                  ],
                },
              ],
            },
            {
              name: 'parcelas',
              children: [
                {
                  name: 'parcela',
                  children: [{ name: 'vlr', text: opportunity.value }],
                },
              ],
            },
          ],
        },
        false
      );

      const apikey = process.env.BLING_TOKEN;

      try {
        const orderStore = await bling.post(
          `/pedido/json/&apikey=${apikey}&xml=${xmlOrder}`
        );

        const { pedido } = orderStore.data.retorno.pedidos[0];

        pedido.value = deal.value;
        pedido.orgName = deal.org_id.name;

        return pedido;
      } catch (error) {
        return error.message;
      }
    });

    const Orders = Promise.all(opportunitiesStore).then((response) => {
      return response;
    });

    return Orders;
  },
};
