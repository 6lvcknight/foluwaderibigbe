import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/ia-high-resolution-logo-white-transparent.png";
import { NavLink } from 'react-router-dom';
import checkAuth from "../store/auth";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkAuth());
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg mb-20">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <NavLink to="/">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Folu Aderibigbe</span>
            </div>
          </NavLink>

          {isLoggedIn && (
            <div className="flex gap-4 justify-end ml-2">
              <a href="/dashboard" className="hover:underline cursor-pointer">
                Dashboard
              </a>
              <a href="/logout" className="hover:underline cursor-pointer">
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
