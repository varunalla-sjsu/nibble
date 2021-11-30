const genderEnum = require("../../enums").genderEnum.genderEnum;
const DataTypes = require('sequelize');
console.log(genderEnum);
module.exports =
{
  tablename: 'employees',
  schema: {
    emp_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.ENUM,
      values: genderEnum,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
    },
    hire_date: {
      type: DataTypes.DATEONLY,
    }
  },
  config: {
    timestamps: false
  }
};
