
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
    req_madeby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    req_dept: {
      type: DataTypes.STRING,
    },
    req_type: {
        type: DataTypes.STRING,
    },
    req_job_title: {
        type: DataTypes.STRING,
      },
    req_date: {
      type: DataTypes.DATEONLY,
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        
      }
  },
  config: {
    timestamps: false
  }
};
