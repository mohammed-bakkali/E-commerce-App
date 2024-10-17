import { useEffect, useState } from "react";
import "../../styles/AdminAddSubcategory.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { createSubcategory } from "../../Redux/reducers/SubCategorySlice";
import { fetchAllCategories } from "../../Redux/reducers/categorySlice";

const useAddSubcategory = () => {
  // State variables
  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Fetch categories on component mount
  useEffect(() => {
    dispatch(fetchAllCategories({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Extract categories from Redux store
  const categories = useSelector((state) => state.category.categories);

  // Handle dropdown category change
  const handleChange = (e) => setID(e.target.value);

  // Handle subcategory name change
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name && id === "0") {
      toast.warn("Please enter a subcategory name and select a main category.");
      return;
    }
    if (id === "0") {
      toast.warn("Please select a main category.");
      return;
    }
    if (!name) {
      toast.warn("Please enter a subcategory name.");
      return;
    }

    setLoading(true);

    try {
      // Dispatch action to create subcategory
      await dispatch(
        createSubcategory({ data: { name, category: id } })
      ).unwrap();
      toast.success("Subcategory added successfully.");
      setName("");
    } catch (error) {
      toast.error("Failed to add Sub Category");
    } finally {
      setLoading(false);
    }
  };

  // Return values and functions to be used in the component
  return {
    id,
    name,
    loading,
    categories,
    handleChange,
    handleSubmit,
    onChangeName,
  };
};

export default useAddSubcategory;
