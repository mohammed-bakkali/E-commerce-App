import { useState } from "react";

const useForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");

  const OnchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleForgetPasswor = () => {};

  return { OnchangeEmail, email, handleForgetPasswor, loading };
};

export default useForgetPasswordHook;
