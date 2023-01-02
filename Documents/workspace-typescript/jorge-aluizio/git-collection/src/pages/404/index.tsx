import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-danger fw-bold">
              <FaExclamationTriangle /> 404
            </h1>
            <h4 className="font__size-small text__dark">
              Sorry, there is nothing here
            </h4>
            <Link className="btn btn-danger text-light" to={'/'}>
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
