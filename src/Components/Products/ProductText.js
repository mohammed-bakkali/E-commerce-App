import "../../styles/ProductText.css";
import { useNavigate, useParams } from "react-router-dom";
import useViewProductsDetailsHook from "../../Hook/product/view-products-details-hook";
import useAddToCartHook from "../../Hook/cart/add-to-cart-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";  

const ProductText = () => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  const { id } = useParams();
  const { item, cat, brand } = useViewProductsDetailsHook(id);
  const { colorClick, indexColor, handleAddToCart } = useAddToCartHook(id, item);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="product-info-details">
      <h1 className="product-title">{item?.title || "No title available"}</h1>

      <p className="product-category">Category: {cat?.name || "Not Available"}</p>

      <h3 className="specifications">Description:</h3>
      <p className="product-description">{item?.description || "No description available"}</p>

      <div className="price-section">
        <h4 className="price">
          {item.priceAfterDiscount >= 1 ? (
            <>
              <span className="original-price">${item?.price}</span>
              <span className="discounted-price">${item?.priceAfterDiscount}</span>
            </>
          ) : (
            <span>${item.price}</span>
          )}
        </h4>
      </div>

      <h3>Select Color</h3>
      <div className="product-colors">
        {item.availableColors && item.availableColors.length > 0
          ? item.availableColors.map((color, index) => (
              <div
                key={index}
                onClick={() => colorClick(index, color)}
                className="color-option"
                style={{
                  backgroundColor: color,
                  position: "relative",
                  display: "inline-block",
                  margin: "0 5px",
                }}
              >
                {indexColor === index && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontSize: "18px",
                    }}
                  />
                )}
              </div>
            ))
          : "No colors available"}
      </div>

      <p className="product-brand">Brand: {brand?.name || "Not Available"}</p>

      <div className="rating">
        <span className="rating-value">
          {item.ratingsAverage || "0.0"} (customer reviews)
        </span>
      </div>

      <div className="available-quantity">
        <p>Available Quantity: {item.quantity || 0}</p>
      </div>

      <button onClick={handleAddToCart} className="detail-add-to-cart">
        Add to Cart
      </button>
      <button className="detail-back-to-products" onClick={handleBackClick}>
        Back to Products
      </button>
    </div>
  );
};

export default ProductText;
