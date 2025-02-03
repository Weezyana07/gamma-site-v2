import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Company Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
