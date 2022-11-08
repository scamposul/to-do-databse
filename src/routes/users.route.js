const {Router} = require("express");
const {getAllUsers, postUser} = require('../controllers/users.controllers');
const {getUsersById} = require('../controllers/users.controllers');
const {getUserJoinAddress} = require('../controllers/users.controllers');
const {getUserJoinTasks} = require('../controllers/users.controllers');

const router = Router();

// obtener a todos los usuarios ---> get 

router.get('/users', getAllUsers);
router.get('/users/:id', getUsersById);
router.get('/users/:id/address', getUserJoinAddress);
router.get('/users/:id/tasks', getUserJoinTasks);

router.post('/users', postUser);

module.exports = router;