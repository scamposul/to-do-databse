const Tasks = require("../models/ tasks.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskcategories.models");
const Users = require("../models/users.models");


class TasksServices {
    static async getAll() {
        try {
            const result = await Tasks.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            const result = await Tasks.findByPk(id, {attributes: ['title', 'description', 'isComplete']});
            return result; 
        } catch (error) {
            throw(error);
        }
    }
    static async getJoinedUser(id) {
        try {
            const result = await Tasks.findOne({
                where: {id},
                attributes: ['title', 'description', 'isComplete'],
                include: {
                    model: Users,
                    as: 'author',
                    attributes: ['id','username']
                }
            });
            return result
        } catch (error) {
            throw(error)
        }
    }
    static async getJoinedCategory(id) {
        try {
            const result = await Tasks.findOne({
                where: {id},
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
            });
            return result
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = TasksServices;
