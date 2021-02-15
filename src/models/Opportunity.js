const { Schema, model } = require('mongoose');

const OppotunitySchema = new Schema(
  {
    numero: Number,
    idPedido: Number,
    value: Number,
    orgName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Opportunity', OppotunitySchema);
