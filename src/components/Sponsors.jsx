import React from 'react';
import m from '../images/monielane.svg';
import c from '../images/cova.svg';
import i from '../images/icrc.svg';
import g from '../images/google.svg';
import l from '../images/limbe.svg';

const Sponsors = () => {
  return (
    <div style={{ marginTop: '60px' }}>
      <div className="container">
        <div className="row">
          <div className="col   mb-5 d-flex justify-content-center">
            <div className="gracy">
              <img src={m} alt="" srcset="" />
            </div>
          </div>
          <div className="col   mb-5 d-flex justify-content-center">
            <div className="gracy">
              <img src={c} alt="" srcset="" />
            </div>
          </div>
          <div className="col   mb-5 d-flex justify-content-center">
            <div className="gracy">
              <img src={i} alt="" srcset="" />
            </div>
          </div>
          <div className="col   mb-5 d-flex justify-content-center">
            <div className="gracy">
              <img src={g} alt="" srcset="" />
            </div>
          </div>
          <div className="col  mb-5 d-flex justify-content-center">
            <div className="gracy">
              <img src={l} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
