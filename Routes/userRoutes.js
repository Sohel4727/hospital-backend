// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController');

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
