const Users = require("../models/users.models");
const Address = require("../models/addresses.models");
const Tasks = require('../models/ tasks.models');
const TaskCategories = require('../models/taskcategories.models');
const Categories = require("../models/categories.models");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: ["id", "username", "email"],
      }); // select * from users
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
        const result = await Users.findByPk(id, {attributes: ["id", "username", "email"]});
        return result;
    } catch (error) {
        throw(error);
    }
  }
  static async getJoinedAddress(id) {
    try {
        const result = await Users.findOne({
            where: { id },
            attributes: ['id', 'username'],
            include: {
                model: Address,
                as: "home",
                attributes: {
                    exclude: ['id', 'user_id', 'userId']
                }
            }
        })
        return result; 
    } catch (error) {
        throw(error)
    }
  }
  static async getJoinedTask(id) {
    try {
        const result = await Users.findOne({
            where: {id},
            attributes: ['username'],
            include: {
                model: Tasks,
                as: 'todo',
                attributes: ['title', 'description', 'isComplete'],
                include: {
                    model: TaskCategories,
                    as: 'categories',
                    attributes: ['category_id'],
                    include: {
                      model: Categories, 
                      as: 'categories',
                      attributes: ['name']
                    }
                }
            }
        });
        return result;
    } catch (error) {
        throw(error);
    }
  }
}

module.exports = UserServices;
