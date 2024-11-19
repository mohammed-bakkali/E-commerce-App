import React from "react";
import "../../styles/RegisterPage.css";
import { Link } from "react-router-dom";
import useRegisterHook from "../../Hook/auth/register-hook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    handleRegister
  } = useRegisterHook();


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
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={onChangePhone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-again">Password (Again)</label>
            <input
              type="password"
              id="password-again"
              placeholder="Password (Again)"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
            />
          </div>
          <button type="submit" className="register" disabled={loading} >
            {loading ? "Loading..." : "Continue"}
          </button>
        </form>
        <div className="form-footer" >
          <span className="c-black">OR</span>
          <p>
            Already a member?
            <Link to="/login">
              <span className="ml-10" style={{ color: "#3b71ca" }}>
                Login 
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
