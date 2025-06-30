


import ProductList from "../components/ProductList";
import products from "../products.json";
import  { useState } from "react";
import Cart from "../components/Cart";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState(0);
const [couponCode, setCouponCode] = useState("");
const [couponError, setCouponError] = useState("");
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const incrementQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const  decrementQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const applyCoupon = () => {
    const regex = /^POWERLABSx$/;
    if (regex.test(couponCode)) {
      setCoupon(13.2);
      setCouponError("");
    } else {
      setCoupon(0);
      setCouponError("Invalid coupon code");
    }
  };

  const getTotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    const discount = (coupon / 100) * total;
    return (total - discount).toFixed(2);
  };


  return (
    <div className="grid md:grid-cols-2 gap-6 py-4 px-10 md:px-14 ">
    <ProductList products={products} addToCart={addToCart} />
    <Cart
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      incrementQty={incrementQty}
      decrementQty={decrementQty}
      applyCoupon={applyCoupon}
      total={getTotal()}
      coupon={coupon}
      couponCode={couponCode}
      setCouponCode={setCouponCode}
      couponError={couponError}
    />
  </div>
  )
}

export default Home