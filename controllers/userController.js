// controllers/userController.js

import User, { find, findById } from '../models/User'; // Assuming you have a User model

// Get all users
const getAllUsers = async (req, res) => {
   try {
      const users = await find();
      res.json(users);
   } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
   const userId = req.params.id;

   try {
      const user = await findById(userId);
      if (!user) {
         res.status(404).json({ error: 'User not found' });
         return;
      }

      res.json(user);
   } catch (error) {
      console.error('Error fetching user by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Create a new user
const createUser = async (req, res) => {
   const { name, email } = req.body;

   // Basic validation
   if (!name || !email) {
      res.status(400).json({ error: 'Name and email are required' });
      return;
   }

   try {
      const newUser = new User({ name, email });
      await newUser.save();

      res.status(201).json(newUser);
   } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

export default {
   getAllUsers,
   getUserById,
   createUser,
};
