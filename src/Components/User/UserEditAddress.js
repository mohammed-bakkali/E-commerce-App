import React from 'react';
import "../../styles/UserEditAddress.css";
import { useParams } from 'react-router-dom';
import useEditAddressHook from '../../Hook/user/edit-address-hook';

const UserEditAddress = () => {
  const { id } = useParams();
  console.log("ID1",id)
  const {
    handelEdit,
    alias,
    detalis,
    phone,
    postalCode,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onChangepostalCode,
  } = useEditAddressHook(id);



  return (
    <div className="edit-address-container">
      <h2 className="edit-address-title">Edit Address</h2>
      <form className="edit-address-form">
        <div className="form-group">
          <input 
            type="text" 
            id="alias" // Changed ID to "alias"
            className="form-input" 
            placeholder="Enter your name address (work, home...)" 
            value={alias}
            onChange={onChangeAlias}
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            id="details" // Changed ID to "details"
            className="form-input" 
            placeholder="Address in detail" 
            value={detalis}
            onChange={onChangeDetalis}
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
            id="postalCode"
            className="form-input" 
            placeholder="Enter postal code" 
            value={postalCode}
            onChange={onChangepostalCode}
          />
        </div>
        <button onClick={handelEdit} type="submit" className="btn-submit">Update Address</button>
      </form>
    </div>
  );
}

export default UserEditAddress;
