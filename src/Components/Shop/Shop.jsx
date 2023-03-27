import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Order from "../Order/Order";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [orderProduct, setOrderProduct] = useState({});
  const addToCart = (product) => {
    setOrderProduct(product);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-3 lg:mx-14 my-6">
      <div className="col-span-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* {console.log(products)} */}
          {products.slice(0, 2).map((product) => (
            <Card
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Card>
          ))}
        </div>
      </div>
      <div className=" w-full mx-auto">
        <Order product={orderProduct}></Order>
      </div>
    </div>
  );
};

export default Shop;
