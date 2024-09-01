import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TECHNICIANS = gql`
  query GetTechnicians {
    technicians {
      id
      user {
        name
      }
      specialization
      experience
      rating
    }
  }
`;

const TechnicianList = () => {
  const { loading, error, data } = useQuery(GET_TECHNICIANS);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div>
      <h2>Teknisyenler</h2>
      {data.technicians.map(technician => (
        <div key={technician.id}>
          <h3>{technician.user.name}</h3>
          <p>Uzmanlık: {technician.specialization}</p>
          <p>Deneyim: {technician.experience} yıl</p>
          <p>Değerlendirme: {technician.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default TechnicianList;