import React from "react";
import "../../styles/AdminAddBrand.css";
import "react-toastify/dist/ReactToastify.css";
import useAddBrandHook from "../../Hook/brand/add-brand-hook";
import Spinner from "../Uitilys/Spinner";
import { ToastContainer } from "react-toastify";
import InternetConnectionChecker from "../../network/InternetConnectionChecker";
const AdminAddBrand = () => {
  const {
    img,
    name,
    loading,
    isPress,
    onNameChange,
    onImageChange,
    handleAddBrand,
  } = useAddBrandHook();

  return (
    <div className="admin-add">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <InternetConnectionChecker />
      <h1 className="page-title">Add New Brand</h1>
      <form className="add-category-form" onSubmit={handleAddBrand}>
        <div className="form-group">
          <label htmlFor="categoryName" className="form-label">
            Category Name:
          </label>
          <input
            type="text"
            id="brandName"
            className="form-input"
            placeholder="Enter category name"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryImage" className="form-label">
            Category Image:
          </label>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="Nrand"
                height={"150px"}
                width={"150px"}
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn-submit"
            disabled={loading} // Disable button while loading
          >
            Add Category
          </button>
          {isPress ? loading ? <Spinner /> : <h4> Loading</h4> : null}
        </div>
      </form>
    </div>
  );
};

export default AdminAddBrand;
