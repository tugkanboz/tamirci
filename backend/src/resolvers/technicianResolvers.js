const Technician = require('../models/Technician');
const User = require('../models/User');

const technicianResolvers = {
  Mutation: {
    createTechnician: async (_, { specialization, experience }, context) => {
      // Burada normalde kullanıcı kimlik doğrulaması yapılmalıdır.
      // Şimdilik basit bir çözüm için yeni bir kullanıcı oluşturacağız.
      const user = await User.create({
        name: "Temporary User",
        email: `temp_${Date.now()}@example.com`,
        password: "temppassword"
      });

      const technician = new Technician({
        user: user._id,
        specialization,
        experience
      });

      await technician.save();
      return technician;
    },
  },
  Technician: {
    user: async (technician) => {
      return await User.findById(technician.user);
    }
  }
};

module.exports = technicianResolvers;