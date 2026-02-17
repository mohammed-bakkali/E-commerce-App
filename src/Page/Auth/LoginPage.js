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

        {/*    onSubmit on form, supports Enter key */}
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

          {/*    shows loading state and disables button */}
          <button type="submit" className="login" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="form-footer">
          <p>
            New user?
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="ml-10" style={{ color: "#0EA5E9" }}>
                Create an accountaccount
              </span>
            </Link>
          </p>
        </div>

        <div className="form-footer">
          <span className="c-black">OR</span>
          <Link to="/user/request-password" style={{ textDecoration: "none" }}>
            <span className="ml-10" style={{ color: "#0EA5E9" }}>
              Forgot your password?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
