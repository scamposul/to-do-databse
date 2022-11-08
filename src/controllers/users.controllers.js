const UserServices = require('../services/users.services');

// controlador para obtener a todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const getUsersById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserJoinAddress = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getJoinedAddress(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

const getUserJoinTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getJoinedTask(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllUsers,
    getUsersById,
    getUserJoinAddress,
    getUserJoinTasks
}