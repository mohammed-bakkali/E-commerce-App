import useCardContainerHook from "../../Hook/product/card-container-hook";
import ProductsCard from "./ProductsCard";
const CradProductContent = ({ products }) => {
  const { favoriteProds } = useCardContainerHook();

  return (
    <div className="responsive-grid-280">
      {products
        ? products.map((element, index) => (
            <ProductsCard
              key={index}
              product={products}
              element={element}
              favoriteProds={favoriteProds}
            />
          ))
        : null}
    </div>
  );
};

export default CradProductContent;
