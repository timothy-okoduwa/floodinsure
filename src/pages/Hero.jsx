import React from 'react';

const Hero = () => {
  return (
    <div className="raiseddd2">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5">
            <div>
              <div className="partyyy">
                Lets <span className="unlockk">unlock</span> parametric flood
                insurance together
              </div>
              <div className="mt-3 noschool">
                We’re excited to learn more about your business and show you how
                floodinsure can help
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <div>
              <div className="dem">Request Demo</div>
              <div className="mt-5">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-5">
                    {' '}
                    <div className="labell mb-2">First name*</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Olivia"
                        className="wellijg"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <div className="labell mb-2">Last name*</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Rhye"
                        className="wellijg"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <div className="labell mb-2">Email*</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="youremail@here.com"
                        className="wellijg"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <div className="labell mb-2">Company</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Hilux"
                        className="wellijg"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <div className="labell mb-2">Job title</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Project Manager"
                        className="wellijg"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <div className="labell mb-2">Phone number</div>
                    <div class="">
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        class="wellijg"
                      />
                    </div>
                  </div>
                  <div className="col-12  mb-4">
                    <div className="labell mb-2">Country</div>
                    <div className="">
                      <select class="wellijg">
                        <option value="Cameroon">Cameroon</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="IvoryCoast">Ivory Coast</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <button className="request5">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
