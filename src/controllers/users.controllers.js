const UserServices = require('../services/users.services');

// controlador para obtener a todos los usuarios
const getAllUsers = async (req, res, next) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getUsersById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getUserJoinAddress = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getJoinedAddress(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getUserJoinTasks = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getJoinedTask(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const postUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.addUser(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({status: 400, errorContent: error})
    }
}

module.exports = {
    getAllUsers,
    getUsersById,
    getUserJoinAddress,
    getUserJoinTasks,
    postUser
}