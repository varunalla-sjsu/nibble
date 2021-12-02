
const DataTypes = require('sequelize');

module.exports =
{
  tablename: 'requests',
  schema: {
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    req_raisedby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    req_dept: {
      type: DataTypes.STRING,
    },
    req_type: {
        type: DataTypes.STRING,
    }, 
    req_date: {
      type: DataTypes.DATEONLY,
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        default : false
      }
  },
  config: {
    timestamps: false
  }
};
