const TasksServices = require("../services/tasks.services")


const getTaskByUserId = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            message: 'No se pueden obtener las tareas',
            status: 400,
            errorContent: error
        });
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

const postTask = async(req, res, next) => {
    try {
        const newTask = req.body
        const result = await TasksServices.addTask(newTask);
        res.status(201).json(result);
    } catch (error) {
        next({status: 400, errorContent: error});
    }
}


module.exports = {
    getTaskByUserId,
    getTaskJoinedWithUser,
    getTaskJoinedWithCategories,
    postTask
}