import React from "react";
import "../../styles/AddressForm.css";
import useAddAddressHook from "../../Hook/user/add-address-hook";

const fields = [
  { id: "alias",      placeholder: "Address name (e.g. Home, Work)", label: "Address Name",  type: "text" },
  { id: "details",    placeholder: "Full address details",            label: "Details",       type: "text" },
  { id: "phone",      placeholder: "Phone number",                    label: "Phone",         type: "tel"  },
  { id: "postalCode", placeholder: "Postal code",                     label: "Postal Code",   type: "text" },
];

const UserAddAddress = () => {
  const {
    alias, details, phone, postalCode,
    onChangeAlias, onChangeDetails, onChangePhone, onChangePostalCode,
    addAddress,
  } = useAddAddressHook();

  const values   = { alias, details, phone, postalCode };
  const handlers = {
    alias: onChangeAlias, details: onChangeDetails,
    phone: onChangePhone, postalCode: onChangePostalCode,
  };

  return (
    <div className="address-form-page">
      <div className="address-form-header">
        <h2>Add New Address</h2>
      </div>

      

      <div className="address-form-card">
        <form>
          {fields.map(({ id, placeholder, label, type }) => (
            <div className="form-group" key={id}>
              <label className="form-label" htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                className="form-input"
                placeholder={placeholder}
                value={values[id]}
                onChange={handlers[id]}
              />
            </div>
          ))}
          <button onClick={addAddress} type="submit" className="btn-submit">
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAddAddress;