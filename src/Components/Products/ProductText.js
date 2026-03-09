import "../../styles/ProductText.css";
import { useNavigate, useParams } from "react-router-dom";
import useViewProductsDetailsHook from "../../Hook/product/view-products-details-hook";
import useAddToCartHook from "../../Hook/cart/add-to-cart-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const ProductText = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { item, cat, brand } = useViewProductsDetailsHook(id);
  const { colorClick, indexColor, handleAddToCart } = useAddToCartHook(id, item);

  if (!item) return <div>Loading...</div>;

  const hasDiscount = item.priceAfterDiscount >= 1;
  const discountPercent = hasDiscount
    ? Math.round(((item.price - item.priceAfterDiscount) / item.price) * 100)
    : 0;

    const renderStars = (rating) => {
      const fullStars = Math.floor(rating); 
      const halfStars = rating % 1 >= 0.5 ? 1 : 0; 
      const emptyStars = 5 - fullStars - halfStars;
  
      const stars = [];
      for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="star full" />);
      }
      for (let i = 0; i < halfStars; i++) {
        stars.push(<FontAwesomeIcon key={`half-${i}`} icon={faStarHalfAlt} className="star half" />);
      }
      for (let i = 0; i < emptyStars; i++) {
        stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarOutline} className="star empty" />);
      }
      return stars;
    };

  // const renderStars = (rating) => {
  //   const full  = Math.floor(rating);
  //   const half  = rating % 1 >= 0.5 ? 1 : 0;
  //   const empty = 5 - full - half;
  //   return [
  //     ...Array(full).fill("full"),
  //     ...Array(half).fill("half"),
  //     ...Array(empty).fill("empty"),
  //   ].map((type, i) => (
  //     <FontAwesomeIcon
  //       key={i}
  //       icon={type === "half" ? faStarHalfAlt : type === "full" ? faStar : faStarOutline}
  //       className={`star ${type}`}
  //     />
  //   ));
  // };

  return (
    <div className="product-info-details">

      {/* Title */}
      <h1 className="product-title">{item.title || "No title available"}</h1>

      {/* Meta: category + brand */}
      <div className="product-meta">
        {cat?.name  && <span className="meta-tag">Category: <span>{cat.name}</span></span>}
        {brand?.name && <span className="meta-tag">Brand: <span>{brand.name}</span></span>}
      </div>

      {/* Rating */}
      <div className="rating">
        <div className="stars">{renderStars(item.ratingsAverage || 0)}</div>
        <span className="rating-count">({item.ratingsQuantity || 0} reviews)</span>
      </div>

      <hr className="detail-divider" />

      {/* Price */}
      <div className="price-section">
        {hasDiscount ? (
          <>
            <span className="discounted-price">${item.priceAfterDiscount}</span>
            <span className="original-price">${item.price}</span>
            <span className="discount-badge">-{discountPercent}%</span>
          </>
        ) : (
          <span className="normal-price">${item.price}</span>
        )}
      </div>

      <hr className="detail-divider" />

      {/* Description */}
      <div>
        <p className="section-label">Description</p>
        <p className="product-description">{item.description || "No description available"}</p>
      </div>

      {/* Colors */}
      {item.availableColors && item.availableColors.length > 0 && (
        <div>
          <p className="section-label">Color</p>
          <div className="product-colors">
            {item.availableColors.map((color, index) => (
              <div
                key={index}
                onClick={() => colorClick(index, color)}
                className={`color-option ${indexColor === index ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                title={color}
              >
                {indexColor === index && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      position: "absolute",
                      top: "50%", left: "50%",
                      transform: "translate(-50%,-50%)",
                      color: "white",
                      fontSize: "16px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="available-quantity">
        <span>Stock:</span>
        <span className="quantity-value">{item.quantity || 0}</span>
        {item.quantity > 0
          ? <span className="in-stock">● In Stock</span>
          : <span className="out-stock">● Out of Stock</span>
        }
      </div>

      {/* Buttons */}
      <div className="btn-row">
        <button onClick={handleAddToCart} className="detail-add-to-cart">
          Add to Cart
        </button>
        <button className="detail-back-to-products" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

    </div>
  );
};

export default ProductText;