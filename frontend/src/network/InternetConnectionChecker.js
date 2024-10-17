import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const checkInternetConnection = async () => {
  if (navigator.onLine) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};
const InternetConnectionChecker = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const checkConnection = async () => {
      const isOnline = await checkInternetConnection();
      if (!isOnline && online) {
        toast.error("You are offline");
        setOnline(false);
      } else if (isOnline && !online) {
        toast.info("You are back online");
        setOnline(true);
      }
    };

    checkConnection(); // Check immediately on mount

    const interval = setInterval(checkConnection, 5000); // Check every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [online]);

  return null;
};

export default InternetConnectionChecker;
