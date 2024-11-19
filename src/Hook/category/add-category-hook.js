import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../Redux/reducers/categorySlice";
import { toast } from "react-toastify";
import avatar from "../../assets/images/avatar.png";

// Custom hook for handling category addition logic
const useAddCategoryHook = () => {
  // State variables
  const [name, setName] = useState("");
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  // Handler for image input change
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0])); // Preview image
      setSelectedFile(e.target.files[0]); // Set the selected file for upload
    }
  };

  // Handler for category name input change
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle form submission for adding a category
  const handleAddCategory = async (e) => {
    e.preventDefault();

    // Input validation
    if (!name && !selectedFile) {
      toast.warn("Please enter a category name and upload an image.");
      return;
    } else if (!name) {
      toast.warn("Please enter a category name.");
      return;
    } else if (!selectedFile) {
      toast.warn("Please upload a category image.");
      return;
    }

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);

    // Dispatch action to add category and handle the result
    try {
      await dispatch(createCategory({ formData })).unwrap();
      toast.success("Category added successfully");
      resetForm();
    } catch (error) {
      toast.error("Failed to add category");
    } finally {
      setLoading(false);
      setIsPress(false);
    }
  };
  const resetForm = () => {
    setName("");
    setImg(avatar);
    setSelectedFile(null);
  };

  // Return state and handlers for use in the component
  return {
    img,
    name,
    loading,
    isPress,
    onNameChange,
    onImageChange,
    handleAddCategory,
  };
};

export default useAddCategoryHook;
