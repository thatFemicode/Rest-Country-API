import React from 'react';
import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from './context/context';
const CountryList = () => {
  const { country, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (country < 1) {
    return (
      <div className="section-center">
        <h2>No Countries match your search</h2>
      </div>
    );
  }
  return (
    <div>
      <section className="section container">
        <div className="country">
          {country.map((country, index) => {
            const { numericCode } = country;
            return <Country key={numericCode} {...country} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default CountryList;
