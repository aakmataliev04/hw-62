import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/Logo.svg'


const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md" style={{background: 'lightblue'}}>
      <div className="container-xxl">
        <NavLink to={'/'} className="navbar-brand">
          <img src={logo} alt="Euphoria"/>

        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <NavLink to="/" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to={'/men'} className="nav-link">
                Men
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to={'/women'} className="nav-link">
                Women
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink to={'/combos'} className="nav-link">
                Combos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/joggers'} className="nav-link">
                Joggers
              </NavLink>
            </li>
          </ul>
          <hr/>
          <button className="border-0 bg-body-tertiary rounded p-2 lh-1 fs-5 ms-auto mt-3 mt-md-0">
            <i className="bi bi-person"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
