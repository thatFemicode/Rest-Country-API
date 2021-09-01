import React from 'react';
import { useRef, useEffect } from 'react';
import { useGlobalContext } from './context/context';
import { FaSearch } from 'react-icons/fa';
const Searchbar = () => {
  const { loading, search, region, setSearch, setRegion } = useGlobalContext();
  const searchValue = useRef('');
  // console.log(search);
  const searchCountry = () => {
    setSearch(searchValue.current.value);
  };
  const searchRegion = (e) => {
    setRegion(e.target.value);
    setSearch('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch((searchValue.current.value = ''));
  };
  return (
    <div className="section container">
      <div className="forms">
        <form action="" className="search-form" onSubmit={handleSubmit}>
          <FaSearch className="icons" />
          <input
            type="text"
            aria-label="country"
            placeholder="Search for a country"
            ref={searchValue}
            onChange={searchCountry}
          />
        </form>
        <form action="" className="select-form">
          <div className="focus">
            <select
              aria-label="regions"
              onChange={searchRegion}
              value={region}
              name="regions"
              id="region-select"
            >
              <option value="all" disabled hidden>
                Filter by Region
              </option>
              <option value="all">All Regions</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
