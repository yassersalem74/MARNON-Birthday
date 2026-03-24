import React from "react";

export default function Navbar() {
  const links = [
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Moments", href: "#moments" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 px-4 py-3"
    >
      {/* Glassy Container */}
      <div className="navbar backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-2xl px-4 lg:px-8">

        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-[#6c8e8e]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h10m-10 6h16"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white/90 backdrop-blur-lg rounded-xl w-56">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#6c8e8e] hover:text-white hover:bg-gradient-to-r hover:from-[#eba9b9] hover:to-[#ee9cb0] rounded-lg px-3 py-2 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOGO */}
          <a
            href="#home"
            className="text-xl lg:text-2xl font-bold tracking-wide text-[#6c8e8e] hover:scale-105 transition-all duration-300"
          >
            MERNA ALAA{" "}
            <span className="text-[#eba9b9] animate-pulse">♥</span>
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-[#6c8e8e] font-medium rounded-xl transition-all duration-300 text-lg
                  hover:text-white hover:bg-gradient-to-r hover:from-[#eba9b9] hover:to-[#ee9cb0] 
                  active:scale-95"
                >
                  {link.name}

                  {/* glow */}
                  <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300 blur-md bg-gradient-to-r from-[#eba9b9] to-[#ee9cb0] -z-10"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <a
            href="https://birthday-party-lovat.vercel.app/"
            className="btn border-none text-white bg-gradient-to-r from-[#eba9b9] to-[#ee9cb0] hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-xl"
          >
            Surprise 🎁
          </a>
        </div>
      </div>
    </div>
  );
}