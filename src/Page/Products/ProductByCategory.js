import React from 'react';
import CradProductContent from '../../Components/Products/CradProductContent';
import Pagination from '../../Components/Uitilys/Pagination';
import useViewSearchProductsHook from '../../Hook/product/view-search-products';
import SideFilter from '../../Components/Uitilys/SideFilter';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Uitilys/SearchCountResult';
import { useParams } from 'react-router-dom';
import useViewProductsByCategoryHook from '../../Hook/product/view-productsByCategory-hook';

const ProductByCategory = () => {
  const  {id} = useParams();


  const { items, pagination, onPageChange } = useViewProductsByCategoryHook(id);


  if (pagination) {
    var totalPages = pagination
  } else totalPages = 0


  // const { items, pagination } = useViewSearchProductsHook();

  // const totalPages = paginationInfo ? paginationInfo : 0;
  return (
    <>
      {/* <CategoryHeader /> */}
      {/* <SearchCountResult onClick={getProduct} title={`${items.length} results search...`} /> */}
      <div className='mt-20'>
        <div className="container d-flex column-direction">
          <div className="">
            {/* <SideFilter /> */}
          </div>
          <div className="" style={{ flex: "1" }}>
            <CradProductContent products={items} />
          </div>
        </div>
        {totalPages >= 1 ? (
          <Pagination totalPages={totalPages} onPageChange={onPageChange} />
        ) : null}

      </div>

    </>
  );
}

export default ProductByCategory;
