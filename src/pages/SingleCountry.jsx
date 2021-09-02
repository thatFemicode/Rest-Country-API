import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from '../components/context/context';
import Loading from '../components/Loading';
const url = `https://restcountries.eu/rest/v2/name`;
const SingleCountry = () => {
  const { name } = useParams();
  const oName = name.replace(/-/, '');
  // console.log(name);
  const { loading, setLoading } = useGlobalContext();
  const [country, setCountry] = useState([]);
  const getCountry = useCallback(async () => {
    try {
      const response = await fetch(`${url}/${oName}`);
      const data = await response.json();
      if (data) {
        const {
          numericCode,
          name,
          flag,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        } = data[0];
        const newCountry = {
          numericCode,
          name,
          flag,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        };
        setCountry(newCountry);
      } else {
        setCountry([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [oName, setLoading]);
  useEffect(() => {
    getCountry();
  }, [getCountry]);
  console.log(loading);
  console.log(country);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default SingleCountry;
