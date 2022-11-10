const { Router } = require("express");
const {
  getTaskByUserId,
  getTaskJoinedWithCategories,
  getTaskJoinedWithUser,
  postTask,
  completeTask
} = require("../controllers/tasks.controllers");

const router = Router();

router.get("/tasks/:id", getTaskByUserId);
router.get("/tasks/:id/category", getTaskJoinedWithCategories);
router.get("/tasks/:id/users", getTaskJoinedWithUser);

router.post("/tasks", postTask);

router.patch('/tasks/:id', completeTask);

module.exports = router;
