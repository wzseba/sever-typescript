import { DataTypes } from 'sequelize';
import { dbConnection } from '../database/index.js';

export const Usuario = dbConnection.define(
  'Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);
