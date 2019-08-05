const broker = require('../broker');
const userRegister = require('../business/user_register');

const queue = {
  name: 'register.user',
  options: {
    durable: true,
  },
};

const routingKey = 'user.register';

broker.consume({ queue, routingKey }, user => userRegister(user));
