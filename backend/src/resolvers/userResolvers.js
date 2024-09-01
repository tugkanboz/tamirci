const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userResolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    registerUser: async (_, { name, email, password, role }) => {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ name, email, password: hashedPassword, role });
      return await user.save();
    },
    loginUser: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) throw new Error('Invalid password');
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token, user };
    },
  },
};

module.exports = userResolvers;