import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../Redux/reducers/UsersSlice";

const useViewUsersAdminHook = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  const response = useSelector((state) => state.users.allusers);

  let limit = 5;

  useEffect(() => {
    setLoading(true);
    dispatch(fetchAllUsers({ limit }));
    setLoading(false);
  }, [dispatch]);

  const handlePageClick = async (page) => {
    setLoading(true);
    await dispatch(fetchAllUsers({ page, limit }));
    setLoading(false);
  };

  const totalUsers = response.results || 0;

  return {
    loading,
    response: response.data || [],
    pagination: response.paginationResult || {},
    handlePageClick,
    totalUsers,
  };
};

export default useViewUsersAdminHook;
