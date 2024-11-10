import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  // Simulate checking authentication status from local storage or API on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated"); // Retrieve the status
    setIsAuthenticated(authStatus === "true"); // Convert to boolean
  }, []);

  // Handle login (this is a placeholder; replace with actual login logic)
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Store login status
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false"); // Remove login status
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-20 shadow-md">
      <div className="px-4 flex items-center justify-between py-3 max-xs:px-2">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" height={66} width={88} />
          </Link>
        </div>

        {/* Centered Navbar for desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />

        {/* Mobile Navbar Menu */}
        <Navbar
          containerStyles={`${menuOpened 
            ? "flex flex-col gap-y-12 fixed top-20 right-0 p-12 bg-white rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 transition-all duration-300 z-30"
            : "fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 ring-1 ring-slate-900/5 transition-all duration-300 z-30"
          }`}
        />

        {/* Buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {/* Menu Toggle Button */}
          {!menuOpened ? (
            <MdMenu 
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full z-30"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose 
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full z-30"
              onClick={toggleMenu} 
            />
          )}

          {/* Cart Button */}
          <NavLink to={"cart-page"} className="flex items-center relative z-30 text-gray-700 hover:text-black">
            <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
            <span className="absolute -top-2 left-4 flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14">0</span>
          </NavLink>

          {/* Conditional Rendering of Logout/Login Buttons */}
          {isAuthenticated ? (
           <button onClick={handleLogout} className="btn_secondary_rounded flexCenter gap-x-2 medium-16 z-30 text-gray-700 hover:text-black">
           <img src={logout} alt="logoutIcon" height={45} width={45} /> {/* Increased size */}
           Logout
         </button>
         ) : (
         <button onClick={handleLogin} className="btn_secondary_rounded flexCenter gap-x-2 medium-16 z-30 text-gray-700 hover:text-black">
           <img src={user} alt="userIcon" height={45} width={45} /> {/* Increased size */}
           Login
         </button>
         
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
