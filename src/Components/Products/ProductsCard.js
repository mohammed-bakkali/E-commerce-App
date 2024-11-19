import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar, faStarHalfAlt, faStar as faStarOutline } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ProductsCard.css";
import { Link } from "react-router-dom";
import useProductCardHook from "../../Hook/product/product-card-hook";

const ProductsCard = ({ element, favoriteProds }) => {
  const {
    addToWishListData,
    deleteToWishListData,
    handelFav,
    favImg,
    imageUrl,
  } = useProductCardHook(element, favoriteProds);


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

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link
          to={`/products/${element._id}`}
          style={{ textDecoration: "none" }}
        >
          <img src={imageUrl} alt="Product" className="product-image" />
        </Link>
        <div className="favorite-icon">
          <img
            src={favImg}
            alt=""
            onClick={handelFav}
            className="text-center"
            style={{
              height: "20px",
              width: "26px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div className="between-flex">
        <h4>{element.title}</h4>
        <h4 className="price">
          {element.priceAfterDiscount >= 1 ? (
            <>
              <span className="original-price">${element.price}</span>  <span className="discounted-price">${element.priceAfterDiscount}</span>
            </>
          ) : (
            <span>${element.price}</span>
          )}
        </h4>
      </div>

      <div className="rating">
        {/* Show stars based on rating*/}
        <span>({element.ratingsQuantity || 0})</span>
        <div className="stars">
          {renderStars(element.ratingsAverage || 0)}
        </div>

      </div>

      {/* <div className="add-to-cart">
        <FontAwesomeIcon icon={faShoppingCart} className="fa-icon" /> Add to
        Cart
      </div> */}
    </div>
  );
};

export default ProductsCard;
