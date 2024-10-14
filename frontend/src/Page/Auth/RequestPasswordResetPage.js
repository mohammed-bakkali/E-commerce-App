import React from "react";
import "../../styles/LoginPage.css";
import { Link } from "react-router-dom";
import useLoginHook from "../../Hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const RequestPasswordResetPage = () => {
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
      <h2>Request Password Reset</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={onChangeEmail}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="login">
            {loading ? "Loading..." : "Send Code "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPasswordResetPage;
