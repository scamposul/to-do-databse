const TasksServices = require("../services/tasks.services")


const getAllTasks = async (req, res) => {
    try {
        const result = await TasksServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getTaskJoinedWithUser = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getJoinedUser(id);
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const getTaskJoinedWithCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getJoinedCategory(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllTasks,
    getTaskById,
    getTaskJoinedWithUser,
    getTaskJoinedWithCategories,
}