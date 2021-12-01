const DataTypes = require('sequelize');
module.exports =
{
  tablename: 'departments',
  schema: {
    dept_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dept_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  config: {
    timestamps: false
  }
};
