const Broker = require('roger-rabbit');

module.exports = Broker({
  host: process.env.RABBITMQ_URL,
  exchange: {
    type: 'direct',
    name: 'klick.account',
  },
});
