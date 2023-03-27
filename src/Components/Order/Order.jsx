import React from "react";

const Order = (props) => {
  // console.log(props.cart);
  const { cart } = props;
  // console.log(cart);
  let shipping = 0;
  let total = 0;
  for (const product of cart) {
    // console.log(1);
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat(total * (7 / 100));
  const grandTotal = total + shipping + tax;
  // console.log(total, tax, shipping);

  return (
    <div className="bg-[#faee06b1] p-5 sticky top-2">
      <h1 className="text-center font-semibold my-2 underline">
        Order Summary
      </h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total : {grandTotal}</h4>
    </div>
  );
};

export default Order;
