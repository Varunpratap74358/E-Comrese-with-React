import React from 'react'

const Products = ({pdata}) => {
    return (
      <div>
        <div className="shadow-lg text-center imgs pb-4">
          <img
            src={pdata.thumbnail}
            alt="Iamge is not found"
            className='w-[100%] h-[25vh] '
          />
          <h4 className=''>{pdata.title}</h4>
          <b>Rs:{pdata.price}$</b>
        </div>
      </div>
    )
  }
  
  
export default Products
