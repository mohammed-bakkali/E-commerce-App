import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";
import useProductCardHook from "../../Hook/product/product-card-hook";

const ProductsCard = ({ element, favoriteProds }) => {
  const { handelFav, favImg, imageUrl } = useProductCardHook(element, favoriteProds);

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

  const hasDiscount = element.priceAfterDiscount >= 1;
  const discountPercent = hasDiscount
    ? Math.round(((element.price - element.priceAfterDiscount) / element.price) * 100)
    : 0;

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image-container">
        <Link to={`/products/${element._id}`} style={{ textDecoration: "none" }}>
          <img src={imageUrl} alt={element.title} className="product-image" />
        </Link>
        <div className="favorite-icon" onClick={handelFav}>
          <img src={favImg} alt="favorite" />
        </div>
      </div>

      {/* Body */}
      <div className="product-card-body">
        <Link to={`/products/${element._id}`} style={{ textDecoration: "none" }}>
          <p className="product-title">{element.title}</p>
        </Link>

        <div className="product-price-row">
          {hasDiscount ? (
            <>
              <span className="discounted-price">${element.priceAfterDiscount}</span>
              <span className="original-price">${element.price}</span>
              <span className="discount-badge">-{discountPercent}%</span>
            </>
          ) : (
            <span className="normal-price">${element.price}</span>
          )}
        </div>

        <div className="rating">
          <div className="stars">{renderStars(element.ratingsAverage || 0)}</div>
          <span className="rating-count">({element.ratingsQuantity || 0})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;