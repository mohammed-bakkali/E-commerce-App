import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAddresses } from "../../Redux/reducers/UserAddressesSlice";

const useViewAddressHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(fetchAllAddresses());
      setLoading(false);
    };
    get();
  }, []);


  const response = useSelector((state) => state.address.allAddresses);

  return { response };
};

export default useViewAddressHook;
