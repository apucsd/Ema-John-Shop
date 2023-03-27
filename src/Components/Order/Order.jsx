import React, { useState, useEffect } from "react";

const Order = (props) => {
  console.log(props);
  const { id, category, name, seller, price, ratings, img } = props.product;
  return (
    <div>
      <h1 className="text-center underline font-semibold text-3xl">
        Order Summary
      </h1>

      {props.product.id && (
        <div className="my-3 mx-auto">
          <img className="w-[50%] h-[200px] mx-auto" src={img} alt="" />
          <h2 className="font-semibold my-2">Product Name: {name}</h2>
          <div className="text-slate-700">
            <hr />
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
