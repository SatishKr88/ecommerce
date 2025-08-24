import React, { useState } from "react";
import SimpleSlider from "./slide";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#2874f0] text-white shadow-lg w-full fixed z-50">
        <nav className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto flex-wrap">


          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center group space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-2 rounded-full shadow-md group-hover:scale-110 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="text-[1.6rem] font-bold tracking-wide group-hover:text-cyan-200 transition">
                  Rishi
                </span>
                <p className="text-sm text-blue-200 tracking-wider uppercase">Electronics Hub</p>
              </div>
            </a>
          </div>


          <button
            className="text-white md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars" />
          </button>


          <div className={`w-full md:flex md:items-center md:justify-between md:w-auto ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>


            <div className="w-full md:w-[400px] px-2 md:px-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center text-white">
                  <i className="fas fa-search text-white/70"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search for products, brands, and more"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                />
              </div>
            </div>


            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm font-medium space-y-2 md:space-y-0 px-2 md:px-0">

              <a href="/login" className="flex items-center space-x-1  hover:text-yellow-200 transition">
                <i className="fas fa-user"></i>
                <span>Login</span>
              </a>


              <a href="/cart" className="relative flex items-center space-x-1 hover:text-yellow-300 transition">
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <span>Cart</span>
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs rounded-full px-1.5 animate-bounce">
                  2
                </span>
              </a>


              <a href="/contact" className="flex items-center space-x-1  px-2 py-1 rounded hover:text-yellow-200 transition">
                <i className="fas fa-phone"></i>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </nav>
      </header>


      <SimpleSlider />
      <ElectronicsCategories />
      <AllProductsSection />
      <Footer />
    </>
  );
}

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

function Footer() {
  return (
    <>
      <footer className="bg-[#1b4da8] text-white mt-16">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-3">Rishi Electronics</h4>
            <p className="text-sm text-gray-300">
              Your one-stop shop for the latest in electronics. Top brands, great deals, and fast delivery — every time.
            </p>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-3">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
              <li><a href="/returns" className="hover:text-white transition">Returns & Refunds</a></li>
              <li><a href="/shipping" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="/warranty" className="hover:text-white transition">Warranty Policy</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-3">Top Categories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/smartphones" className="hover:text-white transition">Smartphones</a></li>
              <li><a href="/laptops" className="hover:text-white transition">Laptops</a></li>
              <li><a href="/accessories" className="hover:text-white transition">Accessories</a></li>
              <li><a href="/tv" className="hover:text-white transition">Televisions</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <a href="tel:+918292901505" className="hover:underline">+91 8292901505</a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span>rishielectronic@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://www.google.com/maps?q=25.934372906803265,85.02351432241963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Anjani, Bihar, India</span>
                </a>
              </li>

            </ul>
          </div>


          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-3">Find Us</h4>
            <div className="rounded overflow-hidden shadow-lg">
              <iframe
                title="Rishi Electronics Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3603.274770692159!2d85.02351432241963!3d25.934372906803265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU2JzAzLjgiTiA4NcKwMDEnMjQuNiJF!5e0!3m2!1sen!2sin!4v1691284100000!5m2!1sen!2sin"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>


        <div className="border-t border-blue-600 mt-6 py-4 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Rishi Electronics. All rights reserved.
        </div>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
    </>
  )
}
export default HomePage;