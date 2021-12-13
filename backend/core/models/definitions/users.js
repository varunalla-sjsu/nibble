
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
        allowNull:false,
        references: { model: 'employees', key: 'emp_no' }
    },
    authid:{
        type:DataTypes.STRING,
        allowNull:false   
    }
  },
  config: {
    timestamps: false
  }
};
