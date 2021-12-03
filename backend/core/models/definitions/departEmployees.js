const DataTypes = require('sequelize');
module.exports =
{
    tablename: 'dept_emp',
    schema: {
        emp_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        dept_no: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        from_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,

        },
        to_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,

        }
    },
    config: {
        timestamps: false
    }
};