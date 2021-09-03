import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <section className="error-page">
        <div className="error-container">
          <h1>😡 This URL address does not exist, Go back home</h1>
          <Link to="/" className="btn btn-block">
            BACK HOME
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error;
