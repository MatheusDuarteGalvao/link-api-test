const { generate } = require('gerador-validador-cpf');
const { js2xmlparser } = require('js2xmlparser');
const bling = require('../helpers/bling');

module.exports = {
  async store(opportunities) {
    const opportunitiesStore = opportunities.map(async (opportunity) => {
      const xmlJson = {
        cliente: {
          nome: opportunity.org_id.name,
          cpf_cnpj: generate(),
          tipoPesso: 'F',
        },
        itens: [
          {
            item: {
              descricao: 'teste item',
              qtde: '1',
              vlr_unit: opportunity.value,
            },
          },
        ],
        parcelas: [
          {
            parcela: {
              vlr: opportunity.value,
            },
          },
        ],
      };

      const orderStore = await bling.post(
        `/pedido/json/&apikey=${process.env.BLING_TOKEN}&xml=${js2xmlparser.parse(xmlJson, 'pedido')}`,
      );

      const { pedido } = orderStore.data.retorno.pedidos[0];

      console.log(pedido);

      pedido.value = deal.value;
      pedido.orgName = deal.org_id.name;

      return pedido;
    });

    const Orders = Promise.all(opportunitiesStore).then((response) => {
      return response;
    });

    return Orders;
  },
};
