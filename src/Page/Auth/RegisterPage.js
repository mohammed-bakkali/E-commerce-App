import React from "react";
import "../../styles/AuthPages.css";
import { Link } from "react-router-dom";
import useRegisterHook from "../../Hook/auth/register-hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const {
    name, email, phone, password, confirmPassword, loading,
    onChangeName, onChangeEmail, onChangePhone,
    onChangePassword, onChangeConfirmPassword, handleRegister,
  } = useRegisterHook();

  return (
    <div className="auth-page">
      <ToastContainer position="bottom-left" autoClose={5000} />

      <div className="auth-card">
        <p className="auth-logo">Shop<span>Zone</span></p>
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Join us and start shopping today</p>
        <hr className="auth-divider" />

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" value={name} onChange={onChangeName} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone Number" value={phone} onChange={onChangePhone} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@example.com" value={email} onChange={onChangeEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" value={password} onChange={onChangePassword} />
          </div>
          <div className="form-group">
            <label htmlFor="password-again">Confirm Password</label>
            <input type="password" id="password-again" placeholder="••••••••" value={confirmPassword} onChange={onChangeConfirmPassword} />
          </div>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          <span className="auth-or">OR</span>
          <p>
            Already a member?
            <Link to="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;