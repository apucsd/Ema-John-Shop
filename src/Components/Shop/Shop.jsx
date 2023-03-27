import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Order from "../Order/Order";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-3 lg:mx-14 my-6">
      <div className="col-span-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* {console.log(products)} */}
          {products.map((product) => (
            <Card
              product={product}
              key={product.id}
              handleCart={handleCart}
            ></Card>
          ))}
        </div>
      </div>
      <div className="">
        <Order cart={cart}></Order>
      </div>
    </div>
  );
};

export default Shop;
