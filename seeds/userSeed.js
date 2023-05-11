const { User } = require('../models')

const userData = [
  {
    username: 'john',
    password: 'doe'
  },
  {
    username: 'jane',
    password: 'smith'
  }
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
