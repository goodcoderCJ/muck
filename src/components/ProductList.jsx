
const ProductList = ({ products, addToCart }) => {
	return (
	  <div>
		<h2 className="text-xl font-semibold mb-4">Products</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		  {products.map((product) => (
			<div key={product.id} className="bg-white p-4 rounded shadow">
			  <div className="rounded-lg"><img src={product.image} alt={product.name} className="mb-2 rounded-lg object-contain " /></div>
			  <h3 className="font-bold">{product.name}</h3>
			  <p className="text-gray-700">₦{product.price}</p>
			  <button
				onClick={() => addToCart(product)}
				className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
			  >
				Add to Cart
			  </button>
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default ProductList;