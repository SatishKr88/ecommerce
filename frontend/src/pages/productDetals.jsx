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
      <div className='w-full h-full flex '>
        <div className='mt-25  mb-100'>
          <div className='absolute'>
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

          <div className=' absolute lg:left-[30%] top-[52%] ml-6 lg:top-auto ' >
            <h1 className='font-bold'>{product.title}</h1>
            <p>{product.description}</p>
            <p className='text-lg font-semibold text-green-600'>₹{product.price}</p>
          </div>
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
      <Footer />
    </>
  )

}
export default ProductDetails;