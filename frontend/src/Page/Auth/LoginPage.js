import React from "react";
import "../../styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container center-flex" style={{height: "670px"}}>
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="login">
            Continue
          </button>
        </form>
        <div className="form-footer">
          <span className="c-black">OR</span>
          <p>
            Not a member?
            <Link to="/register" style={{textDecoration: "none"}}>
              <span className="ml-10" style={{ color: "#3b71ca"}}>Register</span>
            </Link>
          </p>
        </div>
        {/*  */}
        <div className="form-footer">
          <span className="c-black"></span>
          <p>
            Not a member?
            <Link to="/admin/dashboard" style={{textDecoration: "none"}}>
              <span className="ml-10" style={{ color: "#3b71ca"}}>Admin Enter</span>
            </Link>
          </p>
        </div>
        <div className="form-footer">
          <span className="c-black"></span>
          <p>
            Not a member?
            <Link to="/user/allorders" style={{textDecoration: "none"}}>
              <span className="ml-10" style={{ color: "#3b71ca"}}>User Enter</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
