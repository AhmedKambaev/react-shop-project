import React from 'react';

const Spinner = () => {
  return (
      <div className="content-page">
          <div className=" block-spinner">
              <div className="card-body block-spinner">
                  <div className="d-flex justify-content-center spinner-container block-spinner">
                      <div className="spinner-border" role="status"></div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Spinner;