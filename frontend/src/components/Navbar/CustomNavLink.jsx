import { NavLink } from 'react-router';

const CustomNavLink = ({ path, title }) => {
  return (
    <div>
      <NavLink to={path}>
        {({ isActive }) => (
          <span
            className={
              isActive
                ? 'bg-blue-500 p-2 rounded-md text-white font-bold'
                : 'bg-blue-200 p-2 rounded-md text-gray-600 font-bold'
            }
          >
            {title}
          </span>
        )}
      </NavLink>
    </div>
  );
};

export default CustomNavLink;
