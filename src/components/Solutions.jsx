import React from 'react';
import r from '../images/risk.png';
import m from '../images/monitor.png';
import i from '../images/insure.png';
import re from '../images/response.png';
import map from '../images/mapp.png';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
const Solutions = () => {
  return (
    <div className="sollutions">
      <div className="container">
        <div>
          <div className="soso">Solutions</div>
          <div className="Discover">
            Discover how we can help you overcome your challenge
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-3 mb-4">
            <div>
              <div className="jinoo">
                <img src={r} alt="" />
              </div>
              <div className="uhuhu">
                <div className="playback">Risk Profiling</div>
                <div className="zone">
                  Use the best available data for developing country risk
                  profiles and metrics
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="jinoo">
              <img src={m} alt="" />
            </div>
            <div className="uhuhu">
              <div className="playback"> Flood Monitoring</div>
              <div className="zone">
                Near-real-time monitoring, flood forecast, impact analysis and
                alerts
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="jinoo">
              <img src={i} alt="" />
            </div>
            <div className="uhuhu">
              <div className="playback"> Parametric insurance</div>
              <div className="zone">
                Use probabilistic output to develop parametric insurance
                triggers
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="jinoo">
              <img src={re} alt="" />
            </div>
            <div className="uhuhu">
              <div className="playback">Flood Response</div>
              <div className="zone">
                Unified payment gateways for disbursements and network of
                community workers for intervention
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <div className="soso">
              Better protection for vulnerable communities
            </div>
            <div className="Discover">
              Discover how we can help you overcome your challenge
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6 mb-4">
              <div className="shawty">
                <img src={map} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4 ">
              <div className="both">
                <div className="nouee">
                  <img src={p1} alt="" />
                </div>
                <div className="nouee">
                  <img src={p2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
