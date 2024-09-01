const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/database');
const typeDefs = require('./schema/schema');
const userResolvers = require('./resolvers/userResolvers');
const technicianResolvers = require('./resolvers/technicianResolvers');
const serviceResolvers = require('./resolvers/serviceResolvers');

require('dotenv').config();

const app = express();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers: [userResolvers, technicianResolvers, serviceResolvers],
  context: ({ req }) => ({ req }),
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
});