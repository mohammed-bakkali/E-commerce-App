import "../../styles/AdminAddSubcategory.css";
import useAddSubcategory from "../../Hook/subcategory/add-subcategory-hook";

const AdminAddSubcategory = () => {
  const {
    id,
    name,
    loading,
    categories,
    handleChange,
    handleSubmit,
    onChangeName,
  } = useAddSubcategory();

  return (
    <div className="admin-add">
      <h1 className="page-title">Add New Subcategory</h1>
      <form className="add-subcategory-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subcategoryName" className="form-label">
            Subcategory Name:
          </label>
          <input
            type="text"
            id="subcategoryName"
            className="form-input"
            placeholder="Enter subcategory name"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentCategory" className="form-label">
            Main Category:
          </label>
          <select
            id="cat"
            className="form-input"
            value={id}
            onChange={handleChange}
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
          <button type="submit" className="btn-submit">
            {loading ? "Adding..." : "Add Subcategory"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddSubcategory;
