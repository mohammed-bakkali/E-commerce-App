import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPassword, updateUserProfileData } from "../../Redux/reducers/AuthSlice";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const useProfileHook = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  // condition ? expressionIfTrue : expressionIfFalse;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    event.persist();
    setEmail(event.target.value);
  };
  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };
  const onConfirmEdit = async () => {

    if (!name || !email || !phone) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }
    let updatedUserData
    if (user.email === email) {
      updatedUserData = {
        name,
        phone,
      }
    } else {
      updatedUserData = {
        name,
        email,
        phone,
      }
    }
    setLoading(true);

    await dispatch(updateUserProfileData(updatedUserData));
    setLoading(false);
  };

  const response = useSelector((state) => state.user.updateUserProfile);

  useEffect(() => {
    if (loading === false) {
      if (response.status && response.status === 200) {
        const updatedUser = response.data.data.user;
        localStorage.setItem("user", JSON.stringify(updatedUser)); 
        setName(updatedUser.name);
        setEmail(updatedUser.email);
        setPhone(updatedUser.phone);
        toast.success("User information updated successfully");
        setIsEditModalOpen(false);
      } else {
        toast.error("There was an issue with updating user information");
      }
    }
  }, [loading]);

  // 

    ///change user password

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [loadingPass, setLoadingPass] = useState(true);
  
    const onChangeOldPass = (event) => {
      event.persist();
      setOldPassword(event.target.value);
    };
  
    const onChangeNewPass = (event) => {
      event.persist();
      setNewPassword(event.target.value);
    };
    const onChangeConfirmPass = (event) => {
      event.persist();
      setConfirmNewPassword(event.target.value);
    };
  
    const changePassword = async (event) => {
      event.preventDefault();
  
    if (confirmNewPassword !== newPassword) {
      toast.warn("Password confirmation does not match the new password");
      return;
    }
  
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      toast.warn("Please fill in all fields");
      return;
    }
  
    if (newPassword.length < 6) {
      toast.warn("New password must be at least 6 characters long");
      return;
    }
  
      setLoadingPass(true);
      const editPassword = {
        body: {
          currentPassword: oldPassword,
          password: newPassword,
          passwordConfirm: confirmNewPassword,
        },
      };
      await dispatch(updateUserPassword(editPassword));
      setLoadingPass(false);
    };
  
    const responsePass = useSelector((state) => state.user.updateUserPassword);
    if (responsePass) {
      console.log("test100", responsePass);
    }
    console.log(responsePass);
  
    useEffect(() => {
      if (!loadingPass) {
        if (responsePass) {
          console.log("Response:", responsePass);
          if (responsePass.status === 200) {
            toast.success("Password changed successfully");
            setTimeout(() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              navigate("/login");
            }, 1500);
          } else if (responsePass.message === "User recently changed password! Please login again..") {
            toast.warn("Password has been changed recently, please log in again");
          } else {
            toast.error("Password update failed");
          }
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    }, [loadingPass, responsePass]);

  return {
    isEditModalOpen,
    name,
    email,
    phone,
    openEditModal,
    closeEditModal,
    onChangeName,
    onChangeEmail,
    onConfirmEdit,
    onChangePhone,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    user,
  };
};

export default useProfileHook;
