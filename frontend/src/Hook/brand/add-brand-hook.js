import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrand } from "../../Redux/reducers/BrandSlice";
import { toast } from "react-toastify";
import avatar from "../../assets/images/avatar.png";

const useAddBrandHook = () => {
  // State variables
  const [name, setName] = useState("");
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  // Handle image change
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  // Handle name input change
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle brand submission
  const handleAddBrand = async (e) => {
    e.preventDefault();

    // Input validation
    if (name === "" && selectedFile === null) {
      toast.warn("Please enter a brand name and upload an image.");
      return;
    } else if (name === "") {
      toast.warn("Please enter a brand name.");
      return;
    } else if (selectedFile === null) {
      toast.warn("Please upload a brand image.");
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);

    try {
      await dispatch(createBrand({ formData })).unwrap();
      toast.success("Brand added successfully");
      resetForm();
    } catch (error) {
      toast.error("Failed to add brand");
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

  return {
    img,
    name,
    loading,
    isPress,
    onNameChange,
    onImageChange,
    handleAddBrand,
  };
};

export default useAddBrandHook;
