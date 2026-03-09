import React from "react";
import "../../styles/AuthPages.css";
import { Link } from "react-router-dom";
import useLoginHook from "../../Hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const { email, password, loading, onChangeEmail, onChangePassword, handleLogin } = useLoginHook();

  return (
    <div className="auth-page">
      <ToastContainer position="bottom-left" autoClose={5000} />

      <div className="auth-card">
        <p className="auth-logo">Shop<span>Zone</span></p>
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to your account to continue</p>
        <hr className="auth-divider" />

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
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            New user?
            <Link to="/register" className="auth-link">Create an account</Link>
          </p>
          <span className="auth-or">OR</span>
          <p>
            <Link to="/user/request-password" className="auth-link">Forgot your password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;