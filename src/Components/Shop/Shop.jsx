import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-3 lg:mx-14 my-6">
      <div className="col-span-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
          {/* {console.log(products)} */}
          {products.map((product) => (
            <Card {...product} key={product.id}></Card>
          ))}
        </div>
      </div>
      <div className=" mx-auto">
        <h2 className="text-2xl font-semibold ">Add Your Product</h2>
        <hr />
      </div>
    </div>
  );
};

export default Shop;
