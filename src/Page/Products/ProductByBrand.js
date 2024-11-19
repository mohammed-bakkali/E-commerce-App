import React from 'react';
import CradProductContent from '../../Components/Products/CradProductContent';
import Pagination from '../../Components/Uitilys/Pagination';
import { useParams } from 'react-router-dom';

import useViewProductsByBrandHook from '../../Hook/product/view-productsByBrand-hook';

const ProductByBrand = () => {
  const  {id} = useParams();

  const { items, pagination, onPageChange } = useViewProductsByBrandHook(id);


  if (pagination) {
    var totalPages = pagination
  } else totalPages = 0


  return (
    <>
    
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

export default ProductByBrand;
