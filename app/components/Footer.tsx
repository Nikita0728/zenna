import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4">ZENNA</h2>
            <p className="text-gray-600 mb-4">
              Zenna Shop is a very slick and clean eCommerce template.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Our stores</a></li>
              <li><a href="#" className="hover:text-gray-800">About us</a></li>
              <li><a href="#" className="hover:text-gray-800">Business with us</a></li>
              <li><a href="#" className="hover:text-gray-800">Delivery Information</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">My account</a></li>
              <li><a href="#" className="hover:text-gray-800">Wishlist</a></li>
              <li><a href="#" className="hover:text-gray-800">Order history</a></li>
              <li><a href="#" className="hover:text-gray-800">Specials</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Stores</a></li>
              <li><a href="#" className="hover:text-gray-800">Returns</a></li>
              <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Support</a></li>
              <li><a href="#" className="hover:text-gray-800">Warranty</a></li>
              <li><a href="#" className="hover:text-gray-800">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 lg:mb-0">
            &copy; 2024 Zenna | Made by DeoThemes
          </p>
          {/* Payment Methods */}
          {/* <div className="flex space-x-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2014_logo.svg" alt="PayPal" className="h-6"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Visa_2014_logo_detail.svg" alt="Visa" className="h-6"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.svg" alt="Mastercard" className="h-6"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6"/>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
