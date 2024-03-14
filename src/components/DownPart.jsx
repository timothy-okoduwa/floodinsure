import React from 'react';
import { Link } from 'react-router-dom';

const DownPart = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="nacljame">
          <div className="explore">
            Explore the all in one forecasting platform
          </div>
          <div className="start">Start getting weather forecast today</div>
          <div className="mt-3 pb-4 d-flex justify-content-center w-100">
            <Link to="/hero" style={{ textDecoration: 'none' }}>
              <button className="request3">Request Demo</button>
            </Link>
          </div>
        </div>
        <div className="mt-5 tshit">2024 FloodInsure. All right reserved</div>
      </div>
    </div>
  );
};

export default DownPart;
