import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from '../components/context/context';
import Loading from '../components/Loading';
const url = `https://restcountries.eu/rest/v2/name`;
const SingleCountry = () => {
  let { name } = useParams();
  const oName = name.replace(/-/g, ' ');
  // console.log(name);
  const { loading, setLoading } = useGlobalContext();
  const [country, setCountry] = useState([]);
  const getCountry = useCallback(async () => {
    try {
      const response = await fetch(`${url}/${oName}`);
      const data = await response.json();
      setLoading(false);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  }, [oName, setLoading]);
  useEffect(() => {
    setTimeout(() => {
      getCountry();
    }, 3000);
  }, [getCountry]);
  console.log(loading);
  console.log(country);
  if (loading) {
    return <Loading />;
  }

  // const populate = population.toLocaleString();

  return (
    <section className="country-section">
      <div className="container">
        <Link to="/">
          <button className="btn back-btn">
            <FaArrowLeft className="icon" />
            Back
          </button>
        </Link>
        <div>
          {country.map((item) => {
            const {
              numericCode,
              main,
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
            } = item;
            console.log(item);
            return (
              <article key={numericCode} className="single-country">
                <div className="flag">
                  <img src={flag} alt={main} />
                </div>
                <div className="single-country-info">
                  <h4>{main}</h4>
                  <div className="top-section">
                    <div className="inenr-top">
                      <p>
                        Native name: <span>{nativeName}</span>
                      </p>
                      <p>
                        Population: <span>{population.toLocaleString()}</span>
                      </p>
                      <p>
                        Region: <span>{region}</span>
                      </p>
                      <p>
                        Sub Region: <span>{subregion}</span>
                      </p>
                      <p>
                        Capital: <span>{capital}</span>
                      </p>
                    </div>
                    <div className="inner-bottom">
                      <p>
                        Top Level Domain: <span>{topLevelDomain}</span>
                      </p>
                      <p>
                        Currencies: <span>{currencies[0].name}</span>
                      </p>
                      <p>
                        Languages: <span>{languages[0].name}</span>
                      </p>
                    </div>
                  </div>
                  {borders.length > 0 && (
                    <div className="border-section">
                      <h5>Border Countries</h5>
                      <div className="bd-container">
                        {borders.map((border, index) => {
                          return (
                            <p key={index} className="text">
                              {border}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SingleCountry;
