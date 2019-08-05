const UserRepository = require('../repositories/user');
const broker = require('../broker');

module.exports = ({ email, title, content }) => {
  const model = new UserRepository();
  const user = model.find(email);

  if (!user) {
    return null;
  }

  const { identifier } = user;

  return broker.publish('notification.send', { identifier, title, content });
};
