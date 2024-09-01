const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Technician {
    id: ID!
    user: User!
    specialization: String!
    experience: Int!
  }

  type Service {
    id: ID!
    title: String!
    description: String!
    price: Float!
    technician: Technician!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    technicians: [Technician!]!
    technician(id: ID!): Technician
    services: [Service!]!
    service(id: ID!): Service
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!, role: String!): User
    loginUser(email: String!, password: String!): AuthPayload
    createTechnician(specialization: String!, experience: Int!): Technician
    updateTechnician(id: ID!, specialization: String, experience: Int): Technician
    createService(title: String!, description: String!, price: Float!, technicianId: ID!): Service
    updateService(id: ID!, title: String, description: String, price: Float): Service
  }
`;

module.exports = typeDefs;