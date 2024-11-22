import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"



const options = {
    edit : false,
    color: "rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 2.5,
    isHalf:true,
};





const Product = ({product}) => {
  return (
    <Link className='productcard' to={product._id}>
   <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img
      src={product.images[0].url}
      alt={product.name}
    />
  </div>
  <div className="p-4">
    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
     {product.price}
    </h6>
    <p className="text-slate-600 leading-normal font-light">
     {product.name}
    </p>
    <p className="text-slate-600 leading-normal font-light">
    <ReactStars {...options}/>
    </p>
  </div>
 
</div>


    </Link>
  )
}

export default Product
