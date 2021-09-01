import React from 'react';
import CountryList from '../components/CountryList';
// import { useGlobalContext } from '../components/context/context';
// import Loading from '../components/Loading';
import Searchbar from '../components/Searchbar';
const Home = () => {
  // const { loading } = useGlobalContext();
  return (
    <>
      <Searchbar />
      <CountryList />
    </>
  );
};

export default Home;
