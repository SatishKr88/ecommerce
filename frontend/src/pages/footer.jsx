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
export default Footer;