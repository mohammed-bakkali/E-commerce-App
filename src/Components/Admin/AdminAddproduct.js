/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import MultiSelect from "multiselect-react-dropdown";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AdminAddProduct.css";
import add from "../../assets/icons/add-icon-1.png";
import MultiImageInput from "react-multiple-image-input";
import useAddProductHook from "../../Hook/product/add-product-hook";
import { CompactPicker } from "react-color";

const AdminAddProduct = () => {
  const {
    prodName,
    setProdName,
    prodDescription,
    setProdDescription,
    priceBefore,
    crop,
    options,
    setPriceBefore,
    priceAftr,
    setPriceAftr,
    qty,
    categories,
    brands,
    setQty,
    CatID,
    setCatID,
    BrandID,
    SetBrandID,
    subCatID,
    setSubCatID,
    selectSubID,
    setselectSubID,
    loading,
    setLoading,
    images,
    setImages,
    colors,
    setColor,
    showColor,
    setShowColor,
    onSeletCategory,
    onSeletBrand,
    onSelect,
    onRemove,
    handelChangeComplete,
    removeColor,
    handleAddProduct,
  } = useAddProductHook();

  return (
    <div className="admin-add">
      <h1 className="page-title">Add New Product</h1>
      {/* Product Images Section */}
      <div className="form-group">
        <label htmlFor="productImages" className="form-label">
          Product Images:
        </label>

        {/*  */}
        <MultiImageInput
          images={images}
          setImages={setImages}
          cropConfig={{ crop, ruleOfThirds: true }}
          theme={{ outlineColor: "#ccc" }}
          max={5}
          className="multi-image-input-container"
        />
      </div>

      <div className="image-preview-container">
        <h3 className="preview-title">Image Preview:</h3>
        <div className="image-previews">
          {/* Preview images section removed */}
        </div>
      </div>

      <form className="add-product-form">
        <div className="form-group">
          <label htmlFor="productName" className="form-label">
            Product Name:
          </label>
          <input
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
            type="text"
            id="productName"
            className="form-input"
            placeholder="Enter product name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription" className="form-label">
            Description:
          </label>
          <textarea
            value={prodDescription}
            onChange={(e) => setProdDescription(e.target.value)}
            id="productDescription"
            className="form-input"
            placeholder="Enter product description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice" className="form-label">
            Price Before Discount:
          </label>
          <input
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
            type="number"
            id="productPrice"
            className="form-input"
            placeholder="Enter product price befor discount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDiscountPrice" className="form-label">
            Price After Discount:
          </label>
          <input
            value={priceAftr}
            onChange={(e) => setPriceAftr(e.target.value)}
            type="number"
            id="productDiscountPrice"
            className="form-input"
            placeholder="Enter price after discount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productQuantity" className="form-label">
            Available Quantity:
          </label>
          <input
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            type="number"
            id="productQuantity"
            className="form-input"
            placeholder="Enter available quantity"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory" className="form-label">
            Main Category:
          </label>
          <select
            name="cat"
            className="form-input"
            value={CatID} // The current value selected in the drop-down list,
            onChange={onSeletCategory}
          >
            <option value="0">Select a main category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productSubCategories" className="form-label">
            Sub-Categories:
          </label>
          <MultiSelect
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            className="multi-select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productBrand" className="form-label">
            Brand:
          </label>
          <select
            name="Brand"
            className="form-input"
            value={BrandID}
            onChange={onSeletBrand}
          >
            <option value="0">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productColors" className="form-label">
            Available Colors:
          </label>
          <div className="product-colors" style={{ alignItems: "center" }}>
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color-option"
                      style={{ backgroundColor: color }}
                    ></span>
                  );
                })
              : null}
            <img
              onClick={() => setShowColor(!showColor)}
              src={add}
              alt=""
              style={{
                width: "30px",
                cursor: "pointer",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "50%",
              }}
            />
          </div>
          {showColor === true ? (
            <CompactPicker onChangeComplete={handelChangeComplete} />
          ) : null}
        </div>

        <div className="form-group">
          <button
            className="btn-submit"
            type="submit"
            onClick={handleAddProduct}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
