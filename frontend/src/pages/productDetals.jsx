import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product details not found.</div>;
  }

  return (
    <>
      <div className='w-full h-full absolute flex mt-25'>
        <div className='fixed'>
          <img
            src={product.image}
            className="w-80 h-80 object-contain "
          />
          <button
            className="border border-[#2874f0] text-[#2874f0] px-8 py-1 rounded text-sm hover:bg-[#f02828] hover:text-white transition ml-8 mt-2">
            <i className="fa-solid fa-cart-shopping mr-2"></i> Add
          </button>

          <button
            className="border border-[#2874f0] text-[#2874f0] px-8 py-1 rounded text-sm hover:bg-[#2874f0] hover:text-white transition ml-7 mt-2">
            <i className="fa-solid fa-bag-shopping mr-2"></i> Buy
          </button>
        </div>

        <div className=' absolute left-[30%] ' >
          <h1 className='font-bold'>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>

      </div>

    </>
  );
};

function ProductDetails() {
  return (
    <>
      <Navbar />
      <ProductDetail />
      {/* <Footer/> */}
    </>
  )

}
export default ProductDetails;