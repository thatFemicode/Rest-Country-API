import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context/context';
import { FaMoon, FaSun } from 'react-icons/fa';
const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();
  return (
    <nav className="nav-bar">
      <div className="container nav-bar-wrap">
        <Link to="/">
          <h1 className="text">Where in the world</h1>
        </Link>
        {theme === true ? (
          <button
            type="button"
            className="btn toggle-btn"
            onClick={() => setTheme(!theme)}
          >
            <FaMoon className="icon" />
          </button>
        ) : (
          <button
            type="button"
            className="btn toggle-btn"
            onClick={() => setTheme(!theme)}
          >
            <FaSun className="icon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
