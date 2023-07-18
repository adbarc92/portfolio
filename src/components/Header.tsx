import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Header = () => {
  return (
    <header>
      <nav>
        {/* Your logo or brand */}
        <Link to='/'>Your Logo</Link>

        {/* Navigation menu */}
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
