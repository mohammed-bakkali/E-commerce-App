import React from 'react';
import "../../styles/UserProfile.css"

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="User Avatar" className="profile-avatar" />
        <h2 className="profile-name">John Doe</h2>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Location:</strong> New York, USA</p>
        <p><strong>Member Since:</strong> January 2020</p>
      </div>

      <div className="password-change-form">
        <h3>Change Password</h3>
        <form>
          <div className="form-group">
            <label htmlFor="current-password">Current Password</label>
            <input type="password" id="current-password" name="currentPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" name="newPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" name="confirmPassword" />
          </div>
          <button type="submit" className="btn-save-password btn-primary">Save Password</button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
