const { Model, Datatype, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'comments',
        freezeTableName: true,
        underscored: true
    }
)

module.exports = Comment;