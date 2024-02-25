import React, { useState } from 'react';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Perform your login logic here
    // For demonstration purposes, let's assume the login fails
    setErrorMessage('Incorrect email or password. Please try again.');
    // Clear the error message after 10 seconds
    setTimeout(() => {
      setErrorMessage('');
    }, 6000);
  };
  return (
    <div className="raiseddd">
      <div className="sallll">
        <div className="wellcome">Welcome back!</div>
        <div className="loggg">Login to floodInsure</div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="mt-4">
          <div className="mb-4">
            <div className="labell mb-2">Email</div>
            <div className="wellijg">
              <span>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  //   style={{ marginTop: '-7px' }}
                >
                  <path
                    d="M18.3332 3C18.3332 2.08334 17.5832 1.33334 16.6665 1.33334H3.33317C2.4165 1.33334 1.6665 2.08334 1.6665 3M18.3332 3V13C18.3332 13.9167 17.5832 14.6667 16.6665 14.6667H3.33317C2.4165 14.6667 1.6665 13.9167 1.6665 13V3M18.3332 3L9.99984 8.83334L1.6665 3"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="youremail@here.com"
                className="kojor"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="labell mb-2">Password</div>
            <div className="">
              <input
                type="password"
                placeholder="***********"
                className="wellijg"
              />
            </div>
          </div>
          <div className="mt-5">
            <button className="request4" onClick={handleLogin}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
