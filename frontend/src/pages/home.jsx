import Navbar from "./navbar";
import SimpleSlider from "./slide";
import { useNavigate } from 'react-router-dom';
import Footer from "./footer";

function ElectronicsCategories() {
  const fridgeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="7" y="3" width="10" height="18" rx="2" ry="2" stroke="#2874f0" />
      <line x1="12" y1="8" x2="12" y2="16" stroke="#2874f0" />
      <circle cx="16" cy="6" r="1" fill="#2874f0" />
    </svg>
  );

  const categories = [
    { name: "Mobile Phones", icon: "📱" },
    // { name: "Laptops", icon: "💻" },
    // { name: "Cameras", icon: "📷" },
    { name: "Headphones", icon: "🎧" },
    // { name: "Wired Earphones", icon: "🎧" },
    { name: "Smart Watches", icon: "⌚" },
    { name: "TV & Appliances", icon: "📺" },
    // { name: "Gaming Consoles", icon: "🎮" },
    { name: "Speakers", icon: "🔊" },
    { name: "Refrigerator", icon: fridgeIcon },
  ];

  return (
    <section className="bg-white shadow-md py-6 mt-4">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Electronics Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {categories.map(({ name, icon }) => (
            <a
              key={name}
              href={`/category/${name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-[#2874f0] hover:text-white transition cursor-pointer"
            >
              <div className="mb-2">{typeof icon === "string" ? <span className="text-4xl">{icon}</span> : icon}</div>
              <span className="text-sm font-medium">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ image, title, description, price, onClick }) {
  return (

    <div onClick={onClick} className="border border-gray-200 rounded-md overflow-hidden bg-white hover:shadow-md transition duration-200 flex flex-col">
      <div className="bg-white p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain mx-auto"
        />
      </div>
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <h3 className="text-base font-medium text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-auto pt-4">
          <span className="text-lg font-semibold text-green-600">₹{price}</span>
          <button onClick={(e) => {
            e.stopPropagation();

          }}
            className="border border-[#2874f0] text-[#2874f0] px-3 py-1 rounded text-sm hover:bg-[#f02828] hover:text-white transition">
            <i className="fa-solid fa-cart-shopping mr-2"></i> Add
          </button>
          <button onClick={(e) => {
            e.stopPropagation();

          }}
            className="border border-[#2874f0] text-[#2874f0] px-3 py-1 rounded text-sm hover:bg-[#2874f0] hover:text-white transition">
            <i className="fa-solid fa-bag-shopping mr-2"></i> Buy
          </button>
        </div>
      </div>
    </div>

  );
}

function AllProductsSection() {
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const products = [
    {
      id: 1,
      title: "Smartphone Pro Max",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Latest model with high-end features. Great performance and camera.",
      price: "79999",
    },
    {
      id: 2,
      title: "Laptop Ultra Slim",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Lightweight and powerful laptop for professionals.",
      price: "119900",
    },
    {
      id: 3,
      title: "Wireless Headphones",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Comfortable and noise-canceling over-ear headphones.",
      price: "1999",
    },
    {
      id: 4,
      title: "4K Smart TV",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Experience entertainment with stunning visuals and sound.",
      price: "99999",
    },
    {
      id: 5,
      title: "Gaming Console X",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Next-gen gaming console with 4K support and fast loading.",
      price: "49900",
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Portable speaker with powerful bass and long battery life.",
      price: "899",
    },
    {
      id: 7,
      title: "DSLR Camera",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Capture moments in high resolution with this DSLR camera.",
      price: "134900",
    },
    {
      id: 18,
      title: "Smartwatch 2.0",
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/c/y/-original-imahaff2rbuykhcw.jpeg?q=70",
      description: "Fitness tracking, notifications, and more — on your wrist.",
      price: "2499",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Our Products</h2>
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleProductClick(product)}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}



function HomePage() {
  return (
    <>
      <Navbar />
      <SimpleSlider />
      <ElectronicsCategories />
      <AllProductsSection />
      <Footer />
    </>
  )
}
export default HomePage;