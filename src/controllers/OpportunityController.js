const pipedrive = require('../services/pipedrive');
require('dotenv/config');

module.exports = {
  async index(req, res) {
    try {
      return res.status(200).json({ ok: 'ok' });
    } catch (error) {
      throw new Error(err.message);
    }
  },

  async store(req, res) {
    try {
      return res.status(200).json({ ok: 'ok' });
    } catch (error) {
      throw new Error(err.message);
    }
  },
};
