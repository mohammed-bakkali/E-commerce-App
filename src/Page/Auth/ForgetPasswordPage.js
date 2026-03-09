import React from "react";
import "../../styles/AuthPages.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useForgetPasswordHook from "../../Hook/auth/forget-password-hook";

const ForgetPasswordPage = () => {
  const { OnchangeEmail, email, handleForgetPassword, loading } = useForgetPasswordHook();

  return (
    <div className="auth-page">
      <ToastContainer position="bottom-left" autoClose={5000} />

      <div className="auth-card">
        <p className="auth-logo">Shop<span>Zone</span></p>
        <h2 className="auth-title">Reset password</h2>
        <p className="auth-subtitle">Enter your email and we'll send you a reset link</p>
        <hr className="auth-divider" />

        <form onSubmit={handleForgetPassword}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={OnchangeEmail}
              type="email"
              id="email"
              placeholder="example@example.com"
            />
          </div>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Remembered your password?
            <Link to="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;