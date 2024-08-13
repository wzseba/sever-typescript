import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize({ dialect: 'postgres' });

export const Usuario = sequelize.define(
  'Usuario',
  {
    // Model attributes are defined here
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
      type: DataTypes.BOOLEAN
      // allowNull defaults to true
    }
  },
  {
    // Other model options go here
  }
);
