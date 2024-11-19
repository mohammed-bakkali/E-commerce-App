import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders } from "../../Redux/reducers/OrderManagement";

const useUserGetAllOrdersHook = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResult] = useState(0);
  const [paginate, setPaginate] = useState({});
  const [orderData, setOrderData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  let userName = "";
  if (user != null) {
    userName = user.name;
  }

  let limit = 5;
  // Fetch orders once on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      await dispatch(fetchAllOrders({ limit }));
      setLoading(false);
    };
    fetchOrders();
  }, [dispatch]);

  // Handle page change events
  const handlePageClick = async (page) => {
    setLoading(true);
    await dispatch(fetchAllOrders({ page, limit }));
    setLoading(false);
  };

  // Retrieve all orders from the Redux store
  const responseAllOrder = useSelector((state) => state.order.allOrders);
  console.log("responseAllOrder",responseAllOrder)

  useEffect(() => {
    if (responseAllOrder) {
      setResult(responseAllOrder.results || 0);
      setPaginate(responseAllOrder.paginationResult || {});
      setOrderData(responseAllOrder.data || []);
    }
  }, [responseAllOrder]);

  const salesCount = results;

  const totalPaidSales = orderData
  .filter((order) => order.isPaid === true) 
  .reduce((acc, order) => acc + (order.totalOrderPrice || 0), 0);





const customerIds = orderData
.filter((order) => order.isPaid === true) 
.map((order) => order.user?._id); 

// Extract unique customers by converting array to Set
const uniqueCustomers = new Set(customerIds);

// Get the number of unique customers
const customerCount = uniqueCustomers.size;



return { userName, results: salesCount, paginate, orderData, totalPaidSales, handlePageClick,customerCount };
};

export default useUserGetAllOrdersHook;
