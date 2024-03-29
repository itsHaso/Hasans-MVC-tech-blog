const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    'tech_blog_db', 
    'root', 
    'Cerska123', 
    {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;
