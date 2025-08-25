import React, { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const itemstore = JSON.parse(localStorage.getItem('cart'))?.length || 0;

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
                  {itemstore}
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



    </>
  );
}
export default Navbar;