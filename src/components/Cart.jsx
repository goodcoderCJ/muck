const Cart = ({
	cartItems,
	removeFromCart,
	incrementQty,
	decrementQty,
	applyCoupon,
	total,
	coupon,
	couponCode,
	setCouponCode,
	couponError
  }) => {
	return (
	  <div>
		<h2 className="text-xl font-semibold mb-4">Cart</h2>
		<div className="space-y-3">
		  {cartItems.length === 0 ? (
			<p>No items in cart</p>
		  ) : (
			cartItems.map((item) => (
			  <div key={item.id} className="bg-white p-3 rounded shadow">
				<div className="flex justify-between items-center">
				  <div>
					<p className="font-bold">{item.name}</p>
					<p>₦{item.price} x {item.qty}</p>
				  </div>
				  <div className="flex flex-col md:flex-row gap-2 md:space-x-2">
					<button
					  onClick={() => incrementQty(item.id)}
					  className="bg-green-500 px-2 py-1 text-white rounded"
					>
					  +
							</button>
							<button
					  onClick={() => decrementQty(item.id)}
					  className="bg-yellow-500 px-2 py-1 text-white rounded"
					>
					  -
					</button>
					<button
					  onClick={() => removeFromCart(item.id)}
					  className="bg-red-500 px-2 py-1 text-white rounded"
					>
					  Remove
					</button>
				  </div>
				</div>
			  </div>
			))
		  )}
		</div>
  
		{cartItems.length > 0 && (
		  <>
			<div className="mt-4">
			  <input
				type="text"
				value={couponCode}
				onChange={(e) => setCouponCode(e.target.value)}
				placeholder="Enter coupon code"
				className="p-2 border rounded w-full mb-2"
			  />
			  <button
				onClick={applyCoupon}
				className="bg-yellow-500 px-3 py-1 text-white rounded w-full"
			  >
				Apply Coupon
			  </button>
			  {coupon > 0 && (
				<p className="text-green-700 mt-2">13.2% Discount Applied!</p>
			  )}
			  {couponError && (
				<p className="text-red-500 mt-1">{couponError}</p>
			  )}
			</div>
			<div className="mt-4 font-bold text-lg">
			  Total: ₦{total}
			</div>
		  </>
		)}
	  </div>
	);
  };
  
  export default Cart;
