import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleMenuItems = () => {
    setMenu(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-zinc-100 to-zinc-300 shadow-lg">
      <div className="mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden">
            <button onClick={handleMenu}>
              <AiOutlineMenu className="h-6 w-6 text-gray-600 transition-colors duration-300 hover:text-gray-800" />
            </button>
          </div>
            <div className="hidden md:flex justify-center items-center mx-auto">
              <div className="flex justify-center items-center gap-8">
                <Link to="/" onClick={handleMenuItems}>
                  <h6 className="text-gray-800 hover:text-blue-800 text-lg font-bold px-2">Home</h6>
                </Link>
                <Link to="/about" onClick={handleMenuItems}>
                  <h6 className="text-gray-800 hover:text-blue-800 text-lg font-bold px-2">About</h6>
                </Link>
                <Link to="/services" onClick={handleMenuItems}>
                  <h6 className="text-gray-800 hover:text-blue-800 text-lg font-bold px-2">Services</h6>
                </Link>
                <Link to="/portfolio" onClick={handleMenuItems}>
                  <h6 className="text-gray-800 hover:text-blue-800 text-lg font-bold px-2">Portfolio</h6>
                </Link>
                <Link to="/contact" onClick={handleMenuItems}>
                  <h6 className="text-gray-800 hover:text-blue-800 text-lg font-bold px-2">Contact</h6>
                </Link>
              </div>
            </div>
        </div>
      </div>

      <div className={`md:hidden ${menu ? 'block' : 'hidden'} transition-opacity duration-300`}>
        <div className="px-2 pt-2 pb-3">
          <Link to="/" onClick={handleMenuItems}>
            <h6 className="text-gray-800 hover:text-blue-800 block py-2 text-lg font-bold">Home</h6>
          </Link>
          <Link to="/about" onClick={handleMenuItems}>
            <h6 className="text-gray-800 hover:text-blue-800 block py-2 text-lg font-bold">About</h6>
          </Link>
          <Link to="/services" onClick={handleMenuItems}>
            <h6 className="text-gray-800 hover:text-blue-800 block py-2 text-lg font-bold">Services</h6>
          </Link>
          <Link to="/portfolio" onClick={handleMenuItems}>
            <h6 className="text-gray-800 hover:text-blue-800 block py-2 text-lg font-bold">Portfolio</h6>
          </Link>
          <Link to="/contact" onClick={handleMenuItems}>
            <h6 className="text-gray-800 hover:text-blue-800 block py-2 text-lg font-bold">Contact</h6>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;