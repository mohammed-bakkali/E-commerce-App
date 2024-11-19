import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAddress } from "../../Redux/reducers/UserAddressesSlice";

const useAddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetails = (event) => {
    event.persist();
    setDetails(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onChangeCity = (event) => {
    event.persist();
    setCity(event.target.value);
  };

  const onChangePostalCode = (event) => {
    event.persist();
    setPostalCode(event.target.value);
  };

  const addAddress = async (e) => {
    e.preventDefault();
    if (
      alias === "" ||
      details === "" ||
      phone === "" ||
      postalCode === ""
    ) {
      toast.warn("Please fill in all fields");
      return;
    }
    setLoading(true);
    await dispatch(
      createAddress({
        body: {
          alias,
          details,
          phone,
          postalCode,
        },
      })
    );
    setLoading(false);
  };

  const response = useSelector((state) => state.address.createAddress);
  console.log("response2",response)

  useEffect(() => {
    if (loading === false) {
      if (response && response.status && response.status === 200) {
        toast.success("Address added successfully");
        navigate("/user/addresses");
      } else {
        toast.error("There was a problem adding the address");
      }
    }
  }, [loading]);

  return {
    alias,
    details,
    phone,
    city,
    postalCode,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onChangeCity,
    onChangePostalCode,
    addAddress,
  };
};

export default useAddAddressHook;