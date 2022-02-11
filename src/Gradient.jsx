import React from 'react';
import PropTypes from 'prop-types';
import getData from './get-data';

const Gradient = ({ data, lineName, color }) => {
   const { topLimit, lowerLimit } = getData(data, lineName);

  return (
    <linearGradient id={`${lineName}Gradient`} x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stopColor="red" />
      <stop offset={`${topLimit}%`} stopColor="red" />
      <stop offset={`${topLimit}%`} stopColor={`${color}`} />
      <stop offset={`${lowerLimit}%`} stopColor={`${color}`} />
      <stop offset={`${lowerLimit}%`} stopColor="red" />
      <stop offset="100%" stopColor="red" />
    </linearGradient>
  );
};

Gradient.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  lineName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Gradient;
