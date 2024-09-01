import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_SERVICES = gql`
  query GetServices {
    services {
      id
      title
      description
      price
      technician {
        user {
          name
        }
      }
    }
  }
`;

const ServiceList = () => {
  const { loading, error, data } = useQuery(GET_SERVICES);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div>
      <h2>Hizmetler</h2>
      {data.services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <p>Fiyat: {service.price} TL</p>
          <p>Teknisyen: {service.technician.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;