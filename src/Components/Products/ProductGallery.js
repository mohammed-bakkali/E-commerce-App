import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../styles/ProductGallery.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import useViewProductsDetailsHook from "../../Hook/product/view-products-details-hook";
import Spinner from "../Uitilys/Spinner";

const ProductGallery = () => {
  // Extract the id from the URL
  const { id } = useParams();
  // Fetch product details using hook
  const { item, loading, images } = useViewProductsDetailsHook(id);

  if (loading) {
    return (
      
        <Spinner />
    
    );
  }

  // if (!item || !item.images || item.images.length === 0) {
  //   return <div>No images available for this product.</div>;
  // }

  return (
    <div className="gallery-container">
      <ImageGallery
        items={images}
        defaultImage={false}
        showPlayButton={false}
        autoPlay={true}
        renderRightNav={(onClick, disabled) => (
          <RightButton onClick={onClick} disabled={disabled} />
        )}
        renderLeftNav={(onClick, disabled) => (
          <LeftButton onClick={onClick} disabled={disabled} />
        )}
      />
    </div>
  );
};

export default ProductGallery;
