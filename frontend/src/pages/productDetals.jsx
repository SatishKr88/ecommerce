import { useLocation } from 'react-router-dom';
const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product details not found.</div>;
  }

  return (
    <div>
      <img
        src={product.image}
        className="w-full h-48 object-contain mx-auto mt-5"
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};
export default ProductDetail;