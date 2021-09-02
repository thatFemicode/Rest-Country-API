import React from 'react';
import { useEffect, useState, useContext, useCallback } from 'react';

const AppContext = React.createContext();

const url = 'https://restcountries.eu/rest/v2';
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState([]);
  const [theme, setTheme] = useState(false);
  console.log(theme);
  // function to toggle theme
  // const changeTheme = () => {
  //   setTheme(!theme);
  //   if (theme === false) {
  //     document.body.classList.add("dark-theme");
  //   } else if (theme === true) {
  //     document.body.classList.remove("dark-theme");
  //   }
  // };
  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);
  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      if (search !== '') {
        const response = await fetch(`${url}/name/${search}`);
        let data;
        data = await response.json();
        console.log(data);
        if (data.status === 400) {
          data = [];
        }
        setLoading(false);
        setCountry(data);
      } else if (region !== '') {
        let response;
        if (region === 'all') {
          response = await fetch(`${url}/all`);
        } else {
          response = await fetch(`${url}/region/${region}`);
          const data = await response.json();
          // console.log(data);
          setLoading(false);
          setCountry(data);
        }
      } else {
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setCountry(data);
        // console.log(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [region, search, setLoading]);
  useEffect(() => {
    fetchCountries();
  }, [search, region, fetchCountries]);
  return (
    <AppContext.Provider
      value={{
        loading,
        theme,
        search,
        setRegion,
        country,
        setTheme,
        setSearch,
        setLoading,
        region,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
