import React from 'react';
// import styles from './styles.module.scss';

const Nav: React.FC = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#dscatalog-navbar"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="dscatalog-navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className=" active nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/catalog">
              Catálogo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Admin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Nav };
