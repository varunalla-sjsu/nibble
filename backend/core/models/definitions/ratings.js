
const DataTypes = require('sequelize');
module.exports =
{
  tablename: 'ratings',
  schema: {
    emp_no: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    from_data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    to_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        primaryKey: true
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  config: {
    timestamps: false
  }
};
