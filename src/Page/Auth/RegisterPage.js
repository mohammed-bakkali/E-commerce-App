import React from "react";
import "../../styles/RegisterPage.css";
import { Link } from "react-router-dom";

const RogisterPage = () => {
  return (
    <div className="container center-flex">
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="password-again">Password (Again)</label>
            <input
              type="password"
              id="password-again"
              placeholder="Password (Again)"
            />
          </div>
          <button type="submit" className="register">
            Continue
          </button>
        </form>
        <div className="form-footer">
          <span className="c-black">OR</span>
          <p>
          Already a member?
            <Link to="/login">
              <span className="ml-10" style={{ color: "#3b71ca"}}>Login</span>
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RogisterPage;
