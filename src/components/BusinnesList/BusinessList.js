import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses
        ? businesses.map((business, index) => {
            return <Business business={business} key={index} />;
          })
        : null}
    </div>
  );
}

export default BusinessList;
