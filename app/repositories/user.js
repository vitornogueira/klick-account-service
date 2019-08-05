const uuidv1 = require('uuid/v1');
const db = require('../db');

module.exports = class UserRepository {
  constructor() {
    this.table = db.get('users');
  }

  create({ email, name, telegramId }) {
    const user = this.find(email);

    if (user) {
      return user;
    }

    const identifier = uuidv1();

    this.table
      .push({
        identifier,
        email,
        name,
        telegramId,
      })
      .write();

    return this.find(email);
  }

  find(email) {
    return this.table.find({ email }).value();
  }
};
