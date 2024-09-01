import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_TECHNICIAN = gql`
  mutation CreateTechnician($specialization: String!, $experience: Int!) {
    createTechnician(specialization: $specialization, experience: $experience) {
      id
      specialization
      experience
      user {
        id
        name
      }
    }
  }
`;

function Register() {
  const [createTechnician, { data, loading, error }] = useMutation(CREATE_TECHNICIAN);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTechnician({ 
      variables: { 
        specialization: "Electrical", 
        experience: 5 
      } 
    });
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Register Technician</button>
    </form>
  );
}

export default Register;