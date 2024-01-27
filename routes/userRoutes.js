// routes/userRoutes.js
import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController';

// Define user routes
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);

export default userRoutes;
