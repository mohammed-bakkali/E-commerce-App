import React from 'react';
import "../../styles/UserAddAddress.css";
import useAddAddressHook from '../../Hook/user/add-address-hook';

const UserAddAddress = () => {
  const { alias, details, phone,  postalCode, onChangeAlias, onChangeDetails, onChangePhone, onChangePostalCode, addAddress } = useAddAddressHook();

  return (
    <div className="add-address-container">
      <h2 className="add-address-title">Add New Address</h2>
      <form className="add-address-form" >
        <div className="form-group">
          <input 
            type="text" 
            id="address-name" 
            className="form-input" 
            placeholder="Enter address name (e.g., Home, Work)" 
            value={alias} 
            onChange={onChangeAlias} 
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            id="description" 
            className="form-input" 
            placeholder="Enter address description" 
            value={details} 
            onChange={onChangeDetails} 
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            id="phone" 
            className="form-input" 
            placeholder="Enter phone number" 
            value={phone} 
            onChange={onChangePhone} 
          />
        </div>

        <div className="form-group">
          <input 
            type="text" 
            id="postal-code" 
            className="form-input" 
            placeholder="Enter postal code" 
            value={postalCode} 
            onChange={onChangePostalCode} 
          />
        </div>
        <button onClick={addAddress} type="submit" className="btn-submit">Save Address</button>
      </form>
    </div>
  );
}

export default UserAddAddress;
