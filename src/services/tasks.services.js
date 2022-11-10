const Tasks = require("../models/ tasks.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskcategories.models");
const Users = require("../models/users.models");

class TasksServices {
  static async getById(id) {
    try {
      const result = await Tasks.findAll({
        where: { userId: id },
        attributes: ["id", "title", "description", "isComplete"],
        include: {
            model: TaskCategories,
            as: 'categories',
            attributes: ['category_id'],
            include: {
                model: Categories,
                as: 'categories',
                attributes: ['name']
            },
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getJoinedUser(id) {
    try {
      const result = await Tasks.findOne({
        where: { id },
        attributes: ["title", "description", "isComplete"],
        include: {
          model: Users,
          as: "author",
          attributes: ["id", "username"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getJoinedCategory(id) {
    try {
      const result = await Tasks.findAll({
        where: { id },
        attributes: ["title", "description", "isComplete"],
        include: {
          model: TaskCategories,
          as: "categories",
          attributes: ["category_id"],
          include: {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addTask(task, categories) {
    try {
      const taskResult = await Tasks.create(task);
      const { id } = taskResult;
      categories.forEach((category) =>
        TaskCategories.create({ categoryId: category, taskId: id })
      );
      return true
    } catch (error) {
      throw error;
    }
  }
  static async updateStatus(id) {
    try {
        const result = await Tasks.update({isComplete: true}, {
            where: {id}
        });
        return result; 
    } catch (error) {
        throw(error);
    }
  } 
}

module.exports = TasksServices;
