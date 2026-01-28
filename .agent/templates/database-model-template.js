/**
 * @file Database Model Template (Sequelize)
 * @description Example Sequelize model definition
 */

const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/database'); // Hypothetical connection

/**
 * User Model
 * Defines structure for 'users' table
 */
class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        // this.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    }
}

// Initialize function (normally called where DB connection is established)
const initUser = (sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    len: [2, 50]
                }
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            role: {
                type: DataTypes.ENUM('user', 'admin', 'moderator'),
                defaultValue: 'user'
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },
            lastLoginAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            paranoid: true, // Soft deletes (adds deletedAt)
            timestamps: true, // Adds createdAt and updatedAt
            indexes: [
                {
                    unique: true,
                    fields: ['email']
                },
                {
                    fields: ['role', 'isActive']
                }
            ]
        }
    );

    return User;
};

module.exports = initUser;
