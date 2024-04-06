import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, cardHeading, description }) => {
  return (
    <div className="w-[300px] font-paypal-open flex rounded-lg items-center p-6 bg-white shadow-md overflow-hidden md:no-wrap mb-7">
      <div className="">
      <img width="80" height="80" src={icon} alt="card-images" className='border rounded-full bg-gray-100 p-2 max-w-[70%]'/>
      </div>
      <div className="md:flex md:flex-col md:justify-between">
        <div className="space-y-1">
          <h3 className="text-xs  text-gray-900 font-bold">{cardHeading}</h3>
          <p className="text-gray-900 text-xs font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  cardHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
