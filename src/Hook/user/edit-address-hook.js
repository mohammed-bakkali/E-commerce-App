import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import {
  editAddress,
  fetchOneAddress,
} from "../../Redux/reducers/UserAddressesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useEditAddressHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);
  const [alias, setAlias] = useState("");
  const [detalis, setDetalis] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetalis = (event) => {
    event.persist();
    setDetalis(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };
  const onChangepostalCode = (event) => {
    event.persist();
    setPostalCode(event.target.value);
  };

  const singleAddress = useSelector((state) => state.address.singleAddress);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(fetchOneAddress({ id }));
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    if (loading === false && singleAddress && singleAddress.data.data) {
      setAlias(singleAddress.data.data.alias || "");
      setDetalis(singleAddress.data.data.details || "");
      setPhone(singleAddress.data.data.phone || "");
      setPostalCode(singleAddress.data.data.postalCode || "");
    }
  }, [loading]);
  

  const handelEdit = async (e) => {
    e.preventDefault();

    setLoadingEdit(true);
    await dispatch(
      editAddress({
        id, 
        body: {
          alias,
          details: detalis,
          phone,
          postalCode,
        },
      })
    );
    setLoadingEdit(false);
  };
  const responseEdit = useSelector((state) => state.address.editAddress);
  console.log(responseEdit);

  useEffect(() => {
    if (loadingEdit === false) {
      if (responseEdit && responseEdit.status === 200) {
        toast.success("Edit successful");
        setTimeout(() => {
          navigate("/user/addresses"); 
        }, 1000);
      } else {
        toast.error("Edit failed");
      }
    }
  }, [loadingEdit]);

  return {
    alias,
    detalis,
    phone,
    postalCode,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onChangepostalCode,
    handelEdit,
  };
};

export default useEditAddressHook;
