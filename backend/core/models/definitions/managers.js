const DataTypes = require('sequelize');
console.log(genderEnum);
module.exports =
{
  tablename: 'managers',
  schema: {
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dept: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  config: {
    timestamps: false
  }
};
