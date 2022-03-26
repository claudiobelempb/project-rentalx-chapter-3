import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pagination: React.FC = () => {
  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex align-items-center justify-content-center"
    >
      <ul className="pagination">
        <li className="page-item disabled ">
          <Link
            className="page-link rounded-circle me-2"
            to="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">
              <FaChevronLeft />
            </span>
          </Link>
        </li>
        <li className="page-item active">
          <Link className="page-link rounded-circle me-2" to="#">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link rounded-circle me-2" to="#">
            2
          </Link>
        </li>
        <li className="page-item ">
          <Link className="page-link rounded-circle me-2" to="#">
            ...
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link rounded-circle me-2" to="#">
            4
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link rounded-circle me-2"
            to="#"
            aria-label="Next"
          >
            <span aria-hidden="true">
              <FaChevronRight />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Pagination };
