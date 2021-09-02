import React from 'react';
import { Link } from 'react-router-dom';
const Country = ({
  name,
  flag,
  population,
  callingCodes,
  region,
  capital,
  numericCode: id,
}) => {
  const query = name.replace(/ /g, '-');
  // console.log(name, query);
  return (
    <Link to={`/country/${query}`} className="country-card">
      <img src={flag} alt={name} className="country-flag" />
      <div className="country-info">
        <h2 className="country-info-name">{name}</h2>
        <p>
          Population: <span>{population.toLocaleString('en')}</span>{' '}
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default Country;
