import React from "react";
import "../../styles/LoginPage.css";
import { Link } from "react-router-dom";
import useLoginHook from "../../Hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const {
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    handleLogin,
  } = useLoginHook();

  return (
    <div className="container center-flex" style={{ height: "670px" }}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={onChangeEmail}
              type="email"
              id="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login">
            {loading ? "Loading..." : "Continue"}
          </button>
        </form>

        {/* Forgot password link */}
        <div className="form-footer">
          <Link to="/user/request-password" style={{ textDecoration: "none" }}>
            <span className="ml-10" style={{ color: "#3b71ca" }}>
              Forgot your password?
            </span>
          </Link>
        </div>

        <div className="form-footer">
          <span className="c-black">OR</span>
          <p>
            New user?
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="ml-10" style={{ color: "#0EA5E9" }}>
              Create an account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
