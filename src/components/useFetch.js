import { useGlobalContext } from './context/context';
import { useEffect, useState } from 'react';

const useFetch = (urlParams) => {
  const { loading, setLoading } = useGlobalContext();
  const [country, setCountry] = useState([]);

  const getCountry = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountry(``);
  });
};
