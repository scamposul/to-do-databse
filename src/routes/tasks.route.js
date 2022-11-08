const { Router } = require("express");
const {
  getAllTasks,
  getTaskById,
  getTaskJoinedWithCategories,
  getTaskJoinedWithUser,
  postNewTask,
} = require("../controllers/tasks.controllers");

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.get("/tasks/:id/category", getTaskJoinedWithCategories);
router.get("/tasks/:id/users", getTaskJoinedWithUser);

module.exports = router;
