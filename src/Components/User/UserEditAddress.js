import React from "react";
import "../../styles/AddressForm.css";
import { useParams } from "react-router-dom";
import useEditAddressHook from "../../Hook/user/edit-address-hook";

const fields = [
  { id: "alias",      placeholder: "Address name (e.g. Home, Work)", label: "Address Name", type: "text" },
  { id: "detalis",    placeholder: "Full address details",            label: "Details",      type: "text" },
  { id: "phone",      placeholder: "Phone number",                    label: "Phone",        type: "tel"  },
  { id: "postalCode", placeholder: "Postal code",                     label: "Postal Code",  type: "text" },
];

const UserEditAddress = () => {
  const { id } = useParams();
  const {
    handelEdit, alias, detalis, phone, postalCode,
    onChangeAlias, onChangeDetalis, onChangePhone, onChangepostalCode,
  } = useEditAddressHook(id);

  const values   = { alias, detalis, phone, postalCode };
  const handlers = {
    alias: onChangeAlias, detalis: onChangeDetalis,
    phone: onChangePhone, postalCode: onChangepostalCode,
  };

  return (
    <div className="address-form-page">
      <div className="address-form-header">
        <h2>Edit Address</h2>
      </div>

      <div className="address-form-card">
        <form>
          {fields.map(({ id: fid, placeholder, label, type }) => (
            <div className="form-group" key={fid}>
              <label className="form-label" htmlFor={fid}>{label}</label>
              <input
                type={type}
                id={fid}
                className="form-input"
                placeholder={placeholder}
                value={values[fid]}
                onChange={handlers[fid]}
              />
            </div>
          ))}
          <button onClick={handelEdit} type="submit" className="btn-submit">
            Update Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserEditAddress;