import React from "react";
import "../../styles/LoginPage.css";
import { ToastContainer } from "react-toastify";
import useForgetPasswordHook from "../../Hook/auth/forget-password-hook";

const ForgetPasswordPage = () => {
  const { OnchangeEmail, email, handleForgetPassword, loading } =
    useForgetPasswordHook();

  return (
    <div className="container center-flex" style={{ height: "670px" }}>
      <div className="form-container">
        <h2>Request Password Reset</h2>
        <form onSubmit={handleForgetPassword}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={OnchangeEmail}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="login"
            disabled={loading}
          >
            {loading ? "Loading..." : "Send Reset Link"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetPasswordPage;
