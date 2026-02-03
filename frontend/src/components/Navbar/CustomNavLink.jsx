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

{
  /* 1. GLASSMORPHISM NAVBAR */
}
//   <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
//     <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//       <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
//         <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
//           <Feather size={18} />
//         </div>
//         <span>LUMINA</span>
//       </div>

//       <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
//         <a href="#" className="hover:text-white transition-colors">
//           Articles
//         </a>
//         <a href="#" className="hover:text-white transition-colors">
//           Categories
//         </a>
//         <a href="#" className="hover:text-white transition-colors">
//           Newsletter
//         </a>
//         <a href="#" className="hover:text-white transition-colors">
//           About
//         </a>
//       </div>

//       <div className="flex items-center gap-4">
//         <button className="p-2 hover:bg-white/10 rounded-full transition-all">
//           <Search size={20} />
//         </button>
//         <button className="hidden sm:block px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all">
//           Subscribe
//         </button>
//       </div>
//     </div>
//   </nav>
