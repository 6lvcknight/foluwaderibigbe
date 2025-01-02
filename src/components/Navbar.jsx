import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/ia-high-resolution-logo-white-transparent.png";
import { navItems } from "../constants";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-[#1a1a1a]/70 mb-20">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Folu Aderibigbe</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 mr-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  {item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-16 right-0 z-20 backdrop-blur-sm bg-[#1a1a1a]/70 border-none  w-full p-16 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
