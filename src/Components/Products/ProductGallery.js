import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../styles/ProductGallery.css";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import useViewProductsDetailsHook from "../../Hook/product/view-products-details-hook";
import Spinner from "../Uitilys/Spinner";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductGallery = () => {
  // Extract the product ID from the URL
  const { id } = useParams();
  
  // Fetch product details using custom hook
  const { item, loading, images } = useViewProductsDetailsHook(id);

  if (loading) {
    return <Spinner />;
  }

  if (!item || !images || images.length === 0) {
    return <div>No images available for this product.</div>;
  }

  // Map images to use Zoom for each image
  const zoomImages = images.map((img) => ({
    original: img.original,
    thumbnail: img.thumbnail,
    renderItem: () => (
      <Zoom>
        <img
          src={img.original}
          alt={item.name || "Product Image"}
          style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
        />
      </Zoom>
    ),
  }));

  return (
    <div className="gallery-container">
      <ImageGallery
        items={zoomImages}
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
