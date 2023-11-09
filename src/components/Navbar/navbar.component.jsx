import React from 'react';
import { useEffect, useState } from 'react';
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link, useLocation } from "react-router-dom";

import './navbar.styles.css'

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link className='link' to="/">
          Home
        </Link>

        <Link className='link' to="/contact">
          Contact
        </Link>

        <Link className='link' to="/projects">
          Projects
        </Link>

        <Link className='link' to="/experience">
          Experience
        </Link>
        </div>
    </div>
  );
};

export default Navbar;
