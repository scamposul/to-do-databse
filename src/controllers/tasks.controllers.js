const TasksServices = require("../services/tasks.services");
const jwt = require("jsonwebtoken");

const getTaskByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TasksServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "No se pueden obtener las tareas",
      status: 400,
      errorContent: error,
    });
  }
};

const getTaskJoinedWithUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TasksServices.getJoinedUser(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getTaskJoinedWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TasksServices.getJoinedCategory(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const postTask = async (req, res, next) => {
  try {
    const { task, categories } = req.body;
    const result = await TasksServices.addTask(task, categories);
    res.status(201).json({ message: "La tarea ha sido creada" });
  } catch (error) {
    next({ messgage: "La cagaste, bro", status: 400, errorContent: error });
  }
};

const completeTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await TasksServices.updateStatus(id);
    res.status(200).json({ message: "Tarea actualizada" });
  } catch (error) {
    next({
      message: "La cagaste, bro",
      status: 400,
      errorContent: error,
    });
  }
};

module.exports = {
  getTaskByUserId,
  getTaskJoinedWithUser,
  getTaskJoinedWithCategories,
  postTask,
  completeTask,
};
