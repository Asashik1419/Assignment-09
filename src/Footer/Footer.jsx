import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
            <h2 ></h2>
          <Link to='/' className="text-2xl font-bold hover:text-green-300">ToyTopia</Link>
          <p className="mt-2 text-sm">
            A Local Kids Toy Store Platform
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="hover:text-green-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-green-300">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/loginPage" className="hover:text-green-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/terms" className="hover:text-green-300">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-green-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="mt-2 text-sm">
            Email: md.ashikhossain.dev@gmail.com
          </p>
          <p className="text-sm">Phone: 01967832700</p>

          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/" className="hover:text-green-300">
              Facebook
            </a>
            <a href="https://www.instagram.com/?hl=en" className="hover:text-green-300">
              Instagram
            </a>
            <a href="https://www.youtube.com/" 
            className="hover:text-green-300">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30">
        <p className="text-center py-4 text-sm">
          © 2026 ToyTopia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
