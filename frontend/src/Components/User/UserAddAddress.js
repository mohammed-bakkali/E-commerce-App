import React from 'react';
import "../../styles/UserAddAddress.css";

const UserAddAddress = () => {
  return (
    <div className="add-address-container">
      <h2 className="add-address-title">Add New Address</h2>
      <form className="add-address-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
            type="text" 
            id="name" 
            className="form-input" 
            placeholder="Enter your name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="street" className="form-label">Street:</label>
          <input 
            type="text" 
            id="street" 
            className="form-input" 
            placeholder="Enter street name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">City:</label>
          <input 
            type="text" 
            id="city" 
            className="form-input" 
            placeholder="Enter city" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="form-label">State:</label>
          <input 
            type="text" 
            id="state" 
            className="form-input" 
            placeholder="Enter state" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input 
            type="text" 
            id="phone" 
            className="form-input" 
            placeholder="Enter phone number" 
          />
        </div>
        <button type="submit" className="btn-submit">Save Address</button>
      </form>
    </div>
  );
}

export default UserAddAddress;
