const UserRepository = require('../repositories/user');
const broker = require('../broker');

module.exports = (data) => {
  const model = new UserRepository();
  const user = model.create(data);

  return broker.publish('user.sync', user);
};
