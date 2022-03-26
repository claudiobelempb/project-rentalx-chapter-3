import React from 'react';
type LoaderProps = {
  show?: boolean;
  size?: number;
};

const LoaderDefault: React.FC<LoaderProps> = ({ show, size = 4 }) => {
  if (!show) {
    return <></>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center z-index-1">
      <div
        className="spinner-border text-primary"
        style={{ width: `${size}rem`, height: `${size}rem` }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export { LoaderDefault };
