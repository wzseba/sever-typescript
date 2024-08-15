import { Sequelize } from 'sequelize';

import { DB, USER, PASSWORD } from '../env.js';

export const dbConnection = new Sequelize(DB, USER, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log
});
