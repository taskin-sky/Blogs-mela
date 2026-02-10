import CustomNavLink from './CustomNavLink';
import { navItems } from '../../lib/constants/nav-links.constants';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

function Navbar() {
  const navLinks = (
    <>
      {navItems.map((item, index) => (
        <CustomNavLink key={index} path={item.path} title={item.title} />
      ))}
    </>
  );

  return (
    // 1. Used bg-slate-900/95 with backdrop-blur to match footer perfectly
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-md shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- Navbar Start: Logo & Mobile --- */}
          <div className="flex items-center">
            {/* Mobile Dropdown */}
            <div className="lg:hidden mr-2">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="p-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Dropdown />
                </div>
                <div
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-slate-900 border border-slate-800 rounded-2xl z-50 mt-3 w-64 p-4 shadow-2xl space-y-2"
                >
                  {/* We must ensure CustomNavLinks handle light text in dark mode */}
                  <div className="flex flex-col gap-2 text-slate-300">
                    {navLinks}
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800">
                    <Link
                      to="/login"
                      className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl transition-transform active:scale-95"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo: Exact Footer Style */}
            <Link
              to="/"
              className="flex items-center gap-0 text-2xl font-black tracking-tighter group"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Blogs
              </span>
              <span className="text-white group-hover:text-indigo-400 transition-colors duration-300">
                -Mela
              </span>
            </Link>
          </div>

          {/* --- Navbar Center: Desktop Links --- */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Added text-slate-300 to parent container for links */}
            <div className="flex gap-10 font-medium text-slate-300">
              {navLinks}
            </div>
          </div>

          {/* --- Navbar End: Action Button --- */}
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="hidden sm:flex items-center justify-center px-7 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-900/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Login
            </Link>

            {/* Optional search or theme icon for more "Tech" feel */}
            <button className="text-slate-400 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
