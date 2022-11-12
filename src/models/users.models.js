const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bycript = require('bcrypt');

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: (user, options) => {
      const {password} = user;
      const hash = bycript.hashSync(password, 8);
      user.password = hash;
    }
  }
});

module.exports = Users;

// crear el modelo para tasks --> ponerlo dentro de initModels para que
// se cree la tabla en la base de datos
