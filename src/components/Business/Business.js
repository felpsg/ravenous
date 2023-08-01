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
      <img src={business.imageSrc} alt="" />
    </div>
    <h2>{business.name}</h2>
    <div className="Business-information">
      <div className="Business-address">
        <FaMapMarkerAlt className="icon" />
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{`${business.state} ${business.zipCode}`}</p>
      </div>
      <div className="Business-reviews">
        <h3>
          <FaRegListAlt className="icon" /> {business.category.toUpperCase()}
        </h3>
        <h3 className="rating">
          <FaStar className="icon" /> {`${business.rating} stars`}
        </h3>
        <p>
          <FaRegComments className="icon" /> {`${business.reviewCount} reviews`}
        </p>
      </div>
    </div>
  </div>
);

export default Business;
