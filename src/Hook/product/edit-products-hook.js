// Page Edite Products
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCategories } from "../../Redux/reducers/categorySlice";
import { fetchAllBrands } from "../../Redux/reducers/BrandSlice";

import { fetchOneCategory } from "../../Redux/reducers/SubCategorySlice";
import {
  editProduct,
  fetchOneProduct,
} from "../../Redux/reducers/ProductSlice";
import { toast } from "react-toastify";
// import Spinner from "../Uitilys/Spinner";

const useEditProductsHook = (id) => {
  // State variables
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState();
  const [priceAftr, setPriceAftr] = useState();
  const [qty, setQty] = useState();
  // const [subCatID, setSubCatID] = useState([]);
  const [CatID, setCatID] = useState("");
  const [BrandID, SetBrandID] = useState("");
  const [selectSubID, setselectSubID] = useState([]);
  const [colors, setColor] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  // Fetch categories on component mount
  useEffect(() => {
    const run = async () => {
      await dispatch(fetchAllCategories({}));
      await dispatch(fetchAllBrands({}));
      await dispatch(fetchOneProduct({ id }));
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Get product details
  const item = useSelector((state) => state.product.OneProduct);

  useEffect(() => {
    if (item) {
      setProdName(item.title);
      setProdDescription(item.description);
      setPriceBefore(item.price);
      setPriceAftr(item.priceAfterDiscount);
      setQty(item.quantity);
      SetBrandID(item.brand);
      setCatID(item.category);
      setselectSubID(item.subcategory);
      setColor(item.availableColors || []);

      const formattedImages = item.images
        ? item.images.map((img) => `http://${img}`)
        : [];
      setImages(formattedImages);
    }
  }, [item]);

  // Extract data from Redux store
  const categories = useSelector((state) => state.category.categories);
  const brands = useSelector((state) => state.brand.brands);
  const subCategorys = useSelector((state) => state.subcategory.subcategories);

  const [options, setOptions] = useState([]);

  // Handle category selection and fetch subcategories
  const onSeletCategory = (el) => {
    setCatID(el.target.value); // Set the selected category ID
    setOptions([]); // Reset options when a new category is selected
  };

  useEffect(() => {
    if (CatID) {
      const fetchSubCategories = async () => {
        // Fetch subcategories only when a valid category is selected
        await dispatch(fetchOneCategory({ id: CatID }));
      };

      fetchSubCategories(); // Run the fetch function
    }
  }, [CatID, dispatch]);

  useEffect(() => {
    if (subCategorys && subCategorys.length > 0) {
      setOptions(subCategorys); // Update the options once subcategories are available
    }
  }, [subCategorys]);

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
    if (priceBefore <= 0 || isNaN(priceBefore)) {
      toast.error(
        "Price before discount must be a valid number greater than 0."
      );
      return false;
    }
    // if (priceAftr < 0 || isNaN(priceAftr) || priceAftr >= priceBefore) {
    //   toast.error(
    //     "Price after discount must be a valid number less than the original price."
    //   );
    //   return false;
    // }
    if (qty <= 0 || !Number.isInteger(qty)) {
      toast.error("Quantity must be a whole number greater than 0.");
      return false;
    }
    if (
      !CatID ||
      !BrandID ||
      colors.length === 0 ||
      images.length === 0 ||
      images.length > 5
    ) {
      toast.error(
        "Please select a category, brand, at least one color, and upload 1 to 5 images."
      );
      return false;
    }
    return true;
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

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], `${Math.random()}.${ext}`, metadata);
  };

  // Handle Edit a product
  const handleEditProduct = async (e) => {
    e.preventDefault();

    // Validate before proceeding
    if (!validate()) return;

    const formData = new FormData();

    try {
      setLoading(true);

      // Convert cover image
      const imgCover = await convertImageToFile(
        images[0],
        `${Math.random()}.png`
      );
      formData.append("imageCover", imgCover);

      // Convert and append all images
      const itemImages = await Promise.all(
        Object.keys(images).map(async (key) => {
          try {
            return await convertImageToFile(
              images[key],
              `${Math.random()}.png`
            );
          } catch (error) {
            return null; // Return null on error
          }
        })
      );

      // Filter out invalid images
      const validImages = itemImages.filter((imageFile) => imageFile !== null);
      if (validImages.length === 0) {
        toast.error("No valid images found. Please check the images uploaded.");
        return;
      }

      validImages.forEach((imageFile) => {
        formData.append("images", imageFile);
      });

      // Continue with adding other form fields...
      formData.append("title", prodName);
      formData.append("description", prodDescription);
      formData.append("price", priceBefore);
      formData.append("priceAfterDiscount", priceAftr);
      formData.append("quantity", qty);
      formData.append("category", CatID);
      formData.append("brand", BrandID);
      formData.append("colors", JSON.stringify(colors));

      // Dispatch an action to edit the product
      const res = await dispatch(editProduct({ id, formData }));

      // Check the result after submitting
      if (res && res.meta && res.meta.requestStatus === "fulfilled") {
        toast.success("Product edited successfully!");
        resetForm();
      } else {
        toast.error("Failed to edit product");
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          "Failed to edit product: " +
            (error.response.data.message || "Unknown error")
        );
      } else {
        toast.error(
          "Failed to edit product: " + error.message || "Network error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to convert image based on its format
  const convertImageToFile = async (images, filename) => {
    if (typeof images === "string") {
      if (images.startsWith("data:image/")) {
        // It's a base64 image
        return dataURLtoFile(images, filename);
      } else if (images.startsWith("http")) {
        // It's a URL
        return await convertURLtoFile(images);
      }
    }
    throw new Error("Unsupported image format");
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
    prodName,
    setProdName,
    prodDescription,
    setProdDescription,
    priceBefore,
    setPriceBefore,
    priceAftr,
    setPriceAftr,
    qty,
    setQty,
    categories,
    brands,
    CatID,
    setCatID,
    BrandID,
    SetBrandID,
    selectSubID,
    setselectSubID,
    colors,
    setColor,
    showColor,
    setShowColor,
    images,
    setImages,
    loading,
    setLoading,
    crop,
    options,
    onSeletCategory,
    onSeletBrand,
    onSelect,
    onRemove,
    handelChangeComplete,
    removeColor,
    handleEditProduct,
  };
};

export default useEditProductsHook;
