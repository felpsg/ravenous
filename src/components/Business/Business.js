import React from 'react';
import './Business.css';
import {
  FaMapMarkerAlt,
  FaStar,
  FaRegListAlt,
  FaRegComments,
} from 'react-icons/fa';

const Business = ({ business }) => (
  <div className="Business">
    <div className="image-container">
      <img src={business.imageSrc || ''} alt="" />
    </div>
    <h2>{business.name || 'Nome desconhecido'}</h2>
    <div className="Business-information">
      <div className="Business-address">
        <FaMapMarkerAlt className="icon" />
        <p>{business.address || 'Endereço desconhecido'}</p>
        <p>{business.city || 'Cidade desconhecida'}</p>
        <p>{`${business.state || ''} ${business.zipCode || ''}`}</p>
      </div>
      <div className="Business-reviews">
        <h3>
          <FaRegListAlt className="icon" />{' '}
          {business.category?.toUpperCase() || 'Categoria desconhecida'}
        </h3>
        <h3 className="rating">
          <FaStar className="icon" />{' '}
          {`${business.rating || 'Sem avaliações'} stars`}
        </h3>
        <p>
          <FaRegComments className="icon" />{' '}
          {`${business.reviewCount || 'Sem avaliações'} reviews`}
        </p>
      </div>
    </div>
  </div>
);

export default Business;
