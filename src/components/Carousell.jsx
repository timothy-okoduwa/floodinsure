import React from 'react';
import f from '../images/flood.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Carousell = () => {
  return (
    <div className="mt-5 mb-4">
      <div className="container">
        <div className="wellpp">
          <Carousel>
            <div className="row p-5">
              <div className="col-12 col-lg-6 mb-4">
                <div className="twisted">
                  <div className="wordsss">
                    Flood, the prevalent global natural disaster, results in
                    over <span className="sec">$10 billion</span> in annual
                    damages, with only <span className="sec"> 6% insured</span>{' '}
                    in emerging markets.
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="roundedd">
                  <img src={f} alt="" />
                </div>
              </div>
            </div>
            <div className="row p-5">
              <div className="col-12 col-lg-6 mb-4">
                <div className="twisted">
                  <div className="wordsss">
                    Flood, the prevalent global natural disaster, results in
                    over <span className="sec">$10 billion</span> in annual
                    damages, with only <span className="sec"> 6% insured</span>{' '}
                    in emerging markets.
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="roundedd">
                  <img src={f} alt="" />
                </div>
              </div>
            </div>
            <div className="row p-5">
              <div className="col-12 col-lg-6 mb-4">
                <div className="twisted">
                  <div className="wordsss">
                    Flood, the prevalent global natural disaster, results in
                    over <span className="sec">$10 billion</span> in annual
                    damages, with only <span className="sec"> 6% insured</span>{' '}
                    in emerging markets.
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="roundedd">
                  <img src={f} alt="" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Carousell;
