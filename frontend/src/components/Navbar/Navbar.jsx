import CustomNavLink from './CustomNavLink';
import { navItems } from '../../lib/constants/nav-links.constants';
import Dropdown from './Dropdown';

function Navbar() {
  const navLinks = (
    <>
      {navItems.map((item, index) => (
        <CustomNavLink key={index} path={item.path} title={item.title} />
      ))}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Dropdown />
            </div>
            <div
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navLinks}
            </div>
          </div>
          <a className="btn btn-ghost text-xl">My Blog Site</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 flex gap-4">{navLinks}</div>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
