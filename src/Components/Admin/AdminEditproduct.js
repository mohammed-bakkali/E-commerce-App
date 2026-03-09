import React from "react";
import { useParams } from "react-router-dom";
import { CompactPicker } from "react-color";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import "../../styles/AdminAddProduct.css";
import useEditProductsHook from "../../Hook/product/edit-products-hook";

const AdminEditproduct = () => {
  const { id } = useParams();
  const {
    prodName, setProdName,
    prodDescription, setProdDescription,
    priceBefore, setPriceBefore,
    priceAftr, setPriceAftr,
    qty, setQty,
    categories, brands,
    CatID, BrandID,
    options, crop,
    images, setImages,
    colors, showColor, setShowColor,
    onSeletCategory, onSeletBrand,
    onSelect, onRemove,
    handelChangeComplete, removeColor,
    handleEditProduct, loading,
  } = useEditProductsHook(id);

  return (
    <div className="admin-add">
      <h1 className="page-title">Edit Product</h1>

      {/* Images */}
      <div className="image-upload-section">
        <span className="image-upload-label">Product Images (up to 5)</span>
        <MultiImageInput
          images={images}
          setImages={setImages}
          cropConfig={{ crop, ruleOfThirds: true }}
          theme={{ outlineColor: "#e5e7eb" }}
          max={5}
        />
      </div>

      <form className="add-product-form" onSubmit={(e) => e.preventDefault()}>

        {/* Basic info */}
        <div className="form-section">
          <p className="form-section-title">Basic Information</p>

          <div className="form-group">
            <label className="form-label">Product Name</label>
            <input
              value={prodName}
              onChange={(e) => setProdName(e.target.value)}
              type="text"
              className="form-input"
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              value={prodDescription}
              onChange={(e) => setProdDescription(e.target.value)}
              className="form-input"
              placeholder="Enter product description"
            />
          </div>
        </div>

        {/* Pricing & Inventory */}
        <div className="form-section">
          <p className="form-section-title">Pricing & Inventory</p>
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Price</label>
              <input
                value={priceBefore}
                onChange={(e) => setPriceBefore(e.target.value)}
                type="number"
                className="form-input"
                placeholder="$0.00"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Price After Discount</label>
              <input
                value={priceAftr}
                onChange={(e) => setPriceAftr(e.target.value)}
                type="number"
                className="form-input"
                placeholder="$0.00"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Available Quantity</label>
              <input
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                type="number"
                className="form-input"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Category & Brand */}
        <div className="form-section">
          <p className="form-section-title">Category & Brand</p>
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Main Category</label>
              <select
                className="form-input"
                value={CatID}
                onChange={onSeletCategory}
              >
                <option value="0">Select category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Brand</label>
              <select
                className="form-input"
                value={BrandID}
                onChange={onSeletBrand}
              >
                <option value="0">Select brand</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>{brand.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Sub-Categories</label>
            <Multiselect
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              className="multi-select"
              placeholder="Select sub-categories"
            />
          </div>
        </div>

        {/* Colors */}
        <div className="form-section">
          <p className="form-section-title">Available Colors</p>
          <div className="form-group">
            <div className="product-colors">
              {colors.map((color, i) => (
                <span
                  key={i}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  onClick={() => removeColor(color)}
                  title={`Remove ${color}`}
                />
              ))}
              <button
                type="button"
                className="color-add-btn"
                onClick={() => setShowColor(!showColor)}
                title="Add color"
              >
                +
              </button>
            </div>
            {showColor && (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          className="btn-submit"
          type="submit"
          onClick={handleEditProduct}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default AdminEditproduct;