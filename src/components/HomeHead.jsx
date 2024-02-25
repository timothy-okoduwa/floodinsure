import React from 'react';
import { Link } from 'react-router-dom';

const HomeHead = () => {
  return (
    <div className="superbowl">
      <div className="container">
        <div className="dudidi">
          <div className="dontlikebreak">
            <div className="unlock">
              Unlocking parametric <span className="highlight">flood</span>
              <span className="pro">protection</span> for emerging markets
            </div>
          </div>
          <div className="theall">
            The all-in-one platform for flood monitoring, risk profiling, and
            creating custom parametric insurance triggers and micro-insurance
            policies.
          </div>
          <div className="mt-4">
            <Link to="/hero" style={{ textDecoration: 'none' }}>
              <button className="request2">Request Demo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHead;
