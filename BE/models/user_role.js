"use strict";
const { Model } = require("sequelize");
// const user = require("./user");
// const role = require("./role");
module.exports = (sequelize, DataTypes) => {
  class User_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with other tables. Essential for including join tables in to the query.
      models.User.belongsToMany(models.Role, {
        through: User_role,
        foreignKey: { allowNull: false, name: "userId" },
      });
      models.Role.belongsToMany(models.User, {
        through: User_role,
        foreignKey: { allowNull: false, name: "roleId" },
      });
      // User_role.belongsTo(models.User);
      // User_role.belongsTo(models.Role);
      // models.User.hasMany(User_role, {
      //   foreignKey: { name: "userId", allowNull: false },
      //   onDelete: "CASCADE",
      // });
      // models.Role.hasMany(User_role, {
      //   foreignKey: { name: "roleId", allowNull: false },
      //   onDelete: "CASCADE",
      // });
    }
  }
  User_role.init(
    {
      userId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_role",
    }
  );
  return User_role;
};
