const { Router } = require("express");
const {
  getTaskByUserId,
  getTaskJoinedWithCategories,
  getTaskJoinedWithUser,
  postTask,
  completeTask
} = require("../controllers/tasks.controllers");
const authVerification = require('../middlewares/auth.middleware');

const router = Router();

router.get("/tasks/:id", authVerification, getTaskByUserId);
router.get("/tasks/:id/category", authVerification, getTaskJoinedWithCategories);
router.get("/tasks/:id/users", authVerification, getTaskJoinedWithUser);

router.post("/tasks", authVerification, postTask);

router.patch('/tasks/:id', authVerification, completeTask);

module.exports = router;
