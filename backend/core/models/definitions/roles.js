
const DataTypes = require('sequelize');
module.exports =
{
  tablename: 'roles',
  schema: {
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    role_description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  config: {
    timestamps: false
  }
};
