// logic
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCategories } from "../../Redux/reducers/categorySlice";
import { fetchAllBrands } from "../../Redux/reducers/BrandSlice";

import { fetchOneCategory } from "../../Redux/reducers/SubCategorySlice";
import { createProduct } from "../../Redux/reducers/ProductSlice";
import { toast } from "react-toastify";
// import Spinner from "../Uitilys/Spinner";

const useAddProductHook = () => {
  // State variables
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState();
  const [priceAftr, setPriceAftr] = useState();
  const [qty, setQty] = useState();
  const [subCatID, setSubCatID] = useState([]);
  const [CatID, setCatID] = useState("");
  const [BrandID, SetBrandID] = useState("");
  const [selectSubID, setselectSubID] = useState([]);
  const [colors, setColor] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  // Fetch categories on component mount
  useEffect(() => {
    dispatch(fetchAllCategories({}));
    dispatch(fetchAllBrands({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Extract data from Redux store
  const categories = useSelector((state) => state.category.categories);
  const brands = useSelector((state) => state.brand.brands);
  const subCategorys = useSelector((state) => state.subcategory.subcategories);

  // Handle category selection and fetch subcategories
  const onSeletCategory = (el) => {
    if (el.target.value !== "0") {
      dispatch(fetchOneCategory({ id: el.target.value }));
    }
    setCatID(el.target.value);
  };
  useEffect(() => {
    if (CatID !== 0 && subCategorys) {
      setOptions(subCategorys);
    }
  }, [CatID, subCategorys]);

  
  // Handle brand selection
  const onSeletBrand = (el) => {
    SetBrandID(el.target.value);
  };

  // Sub-category handling
  const onSelect = (selectedList) => setselectSubID(selectedList);
  const onRemove = (removedList) => setselectSubID(removedList);

  // Color picker handling
  const handelChangeComplete = (color) => {
    setColor([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const removeColor = (color) => {
    const newColors = colors.filter((e) => e !== color);
    setColor(newColors);
  };

  // Convert base64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // Input validation
  const validate = () => {
    if (!prodName.trim()) {
      toast.error("Product name is required.");
      return false;
    }
    if (prodName.length < 3 || prodName.length > 50) {
      toast.error("Product name must be between 3 and 50 characters.");
      return false;
    }
    if (!prodDescription.trim()) {
      toast.error("Description is required.");
      return false;
    }
    if (prodDescription.length < 10 || prodDescription.length > 1000) {
      toast.error("Description must be between 10 and 1000 characters.");
      return false;
    }
    if (priceBefore <= 0) {
      toast.error("Price before discount must be greater than 0.");
      return false;
    }
    if (isNaN(priceBefore)) {
      toast.error("Price before discount must be a valid number.");
      return false;
    }
    // Check price after discount
    if (priceAftr < 0) {
      toast.error("Price after discount cannot be negative.");
      return false;
    }
    if (isNaN(priceAftr)) {
      toast.error("Price after discount must be a valid number.");
      return false;
    }
    if (priceAftr >= priceBefore) {
      toast.error(
        "Price after discount should be less than the original price."
      );
      return false;
    }
    // Check quantity
    if (qty <= 0) {
      toast.error("Quantity must be greater than 0.");
      return false;
    }

    if (!Number.isInteger(qty)) {
      toast.error("Quantity must be a whole number.");
      return false;
    }
    // Category selection check
    if (!CatID) {
      toast.error("Please select a category.");
      return false;
    }
    // Brand selection check
    if (!BrandID) {
      toast.error("Please select a brand.");
      return false;
    }
    // Color selection check
    if (colors.length === 0) {
      toast.error("At least one color must be selected.");
      return false;
    }

    // Image upload check
    if (images.length === 0) {
      toast.error("Please upload at least one product image.");
      return false;
    }
    if (images.length > 5) {
      toast.error("You can upload a maximum of 5 images.");
      return false;
    }
    return true;
  };

  // Handle adding a product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    // Validate before proceeding
    if (!validate()) return;

    const formData = new FormData();

    // Check if images is an object and has at least one image
    if (Object.keys(images).length > 0) {
      // Convert first image to file for imageCover
      const imgCover = dataURLtoFile(images[0], `${Math.random()}.png`);
      formData.append("imageCover", imgCover);

      // Append other images to formData
      // Convert other images to file
      const itemImages = Object.keys(images).map(
        (key) => dataURLtoFile(images[key], `${Math.random()}.png`) // Convert the image data into a file object with a random name
      );
      // Iterate over each image file in the `itemImages` array to add it to a FormData object
      itemImages.forEach((imageFile) => {
        formData.append("images", imageFile);
      });
    }

    // Add other form fields to formData
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAftr);
    formData.append("category", CatID);
    formData.append("brand", BrandID);
    colors.map((color) => formData.append("availableColors", color));
    selectSubID.map((subcat) => formData.append("subcategory", subcat._id));

    setLoading(true);

    try {
      await dispatch(createProduct({ formData })).unwrap();
      toast.success("Product added successfully");
      resetForm();
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error("Failed to add product: " + error.response.data.message);
      } else {
        toast.error("Failed to add product: " + error.message);
      }
    } finally {
      setLoading(false); 
    }
  };
  const resetForm = () => {
    setProdName("");
    setProdDescription("");
    setPriceBefore(0);
    setPriceAftr(0);
    setQty(0);
    setCatID("");
    SetBrandID("");
    setImages([]);
    setColor([]);
    setselectSubID([]);
  };

  return {
    prodName, setProdName, prodDescription, setProdDescription,
    priceBefore, setPriceBefore, priceAftr, setPriceAftr, qty, setQty,
    categories, brands, CatID, setCatID, BrandID, SetBrandID,
    selectSubID, setselectSubID, colors, setColor, showColor, setShowColor,
    images, setImages, loading, setLoading, crop, options,
    onSeletCategory, onSeletBrand, onSelect, onRemove,
    handelChangeComplete, removeColor, handleAddProduct
  };
};

export default useAddProductHook;
