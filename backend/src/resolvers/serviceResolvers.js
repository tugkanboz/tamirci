const Service = require('../models/Service');

const serviceResolvers = {
  Query: {
    services: async () => await Service.find().populate('technician'),
    service: async (_, { id }) => await Service.findById(id).populate('technician'),
  },
  Mutation: {
    createService: async (_, { title, description, price, technicianId }) => {
      const service = new Service({ title, description, price, technician: technicianId });
      return await service.save();
    },
    updateService: async (_, { id, title, description, price }) => {
      return await Service.findByIdAndUpdate(id, { title, description, price }, { new: true });
    },
  },
};

module.exports = serviceResolvers;