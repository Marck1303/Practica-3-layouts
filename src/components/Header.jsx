import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2">
          <img src="loglo-klean.jpg" className="w-6 h-6" alt="" />
          <Link to="/" className="text-xl font-bold text-[#6C63FF]">
            Klean
          </Link>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          {[
            "/",
            "/services",
            "/details",
            "/features",
            "/projects",
            "/team",
            "/contact",
          ].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                (isActive ? "text-[#6C63FF] font-semibold" : "") +
                " transition hover:text-[#6C63FF]"
              }
            >
              {
                [
                  "Home",
                  "Services",
                  "Details",
                  "Features",
                  "Projects",
                  "Team",
                  "Contact",
                ][i]
              }
            </NavLink>
          ))}
        </nav>

        {/* Botones de usuario */}
        <div className="hidden md:flex gap-4">
          <button className="text-sm text-[#6C63FF] font-medium">Log In</button>
          <button className="text-sm bg-[#6C63FF] text-white px-4 py-1.5 rounded-md hover:bg-[#584ad2] transition">
            Sign Up
          </button>
        </div>
        {/* Menú Hamburguesa - Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#6C63FF] focus:outline-none"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Dropdown - Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            {[
              "/",
              "/services",
              "/details",
              "/features",
              "/projects",
              "/team",
              "/contact",
            ].map((path, i) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  (isActive ? "text-[#6C63FF] font-semibold" : "") +
                  " transition hover:text-[#6C63FF]"
                }
              >
                {
                  [
                    "Home",
                    "Services",
                    "Details",
                    "Features",
                    "Projects",
                    "Team",
                    "Contact",
                  ][i]
                }
              </NavLink>
            ))}
            <hr />
            <button className="text-sm text-[#6C63FF] text-left">Log In</button>
            <button className="text-sm bg-[#6C63FF] text-white px-4 py-1.5 rounded-md hover:bg-[#584ad2] transition w-fit">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
