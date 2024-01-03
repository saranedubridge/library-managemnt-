import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark">
      <div className="container">
        <Link to="/students" className="text-white navbar-brand">
          <i className="me-2 fas fa-graduation-cap"></i>
          Library
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/books" className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addbooks" className="nav-link">
                Add Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books/take" className="nav-link">
                Return Books
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
