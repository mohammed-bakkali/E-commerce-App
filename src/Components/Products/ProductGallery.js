import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import img1 from "../../assets/images/products/1.jpg";
import "../../styles/ProductGallery.css";
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallery = () => {
  const images = [
    {
      original: img1,
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: img1,
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: img1,
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: img1,
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
  ];

  return (
    <div className="gallery-container">
      <ImageGallery
        items={images}
        defaultImage={img1}
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
