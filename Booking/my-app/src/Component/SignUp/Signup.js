import React from 'react'
import './signup.css'
function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup-container">
          <div className="signup-text">
            <div className="signup-heading">
              <h2>Save time, save money!</h2>
              <p>Sign up and we'll send the best deals to you</p>
            </div>
            <div className="signup-form">
              <form action="">
                <div className="sign-input">
                  <input
                    placeholder="Your Email Address"
                    type="text"
                    name="signup"
                    id="subscribe"
                  />
                  <button>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
