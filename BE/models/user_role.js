"use strict";
const { Model } = require("sequelize");
const user = require("./user");
const role = require("./role");
module.exports = (sequelize, DataTypes) => {
  class User_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with other tables. Essential for including join tables in to the query.
      user.belongsToMany(role, {
        through: User_role,
        foreignKey: { allowNull: false, name: "user_id" },
      });
      role.belongsToMany(user, {
        through: User_role,
        foreignKey: { allowNull: false, name: "role_id" },
      });
      User_role.belongsTo(user);
      User_role.belongsTo(role);
      user.hasMany(User_role, {
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });
      role.hasMany(User_role, {
        foreignKey: { name: "role_id", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  User_role.init(
    {
      user_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_role",
    }
  );
  return User_role;
};
