
const DataTypes = require('sequelize');
module.exports =
{
  tablename: 'users',
  schema: {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emp_no:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  },
  config: {
    timestamps: false
  }
};
