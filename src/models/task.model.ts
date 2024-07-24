import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  const Task = sequelize.define('tasks', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        maxLength: 255,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    schedule: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  // Add custom methods or associations here

  return Task;
};
