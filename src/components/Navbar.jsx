import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/ia-high-resolution-logo-white-transparent.png";
import { navItems } from "../constants";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg mb-20">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <NavLink to="/foluwaderibigbe">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Folu Aderibigbe</span>
            </div>
          </NavLink>
          <div className="lg:hidden md:flex flex-col justify-end">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
