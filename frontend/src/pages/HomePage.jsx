import React from 'react';

function HomePage() {
  return <div>HomePage</div>;
}

export default HomePage;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Search,
//   Feather,
//   ArrowRight,
//   Github,
//   Twitter,
//   Instagram,
//   Mail,
// } from 'lucide-react';

// const HomePage = () => {
//   // Mock Data for Posts
//   const featuredPosts = [
//     {
//       id: 1,
//       title: 'The Future of AI in Web Development',
//       category: 'Technology',
//       date: 'Jan 24, 2026',
//       image:
//         'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
//     },
//     {
//       id: 2,
//       title: 'Mastering Minimalism in UI Design',
//       category: 'Design',
//       date: 'Jan 22, 2026',
//       image:
//         'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
//     },
//   ];

//   const latestPosts = [
//     {
//       id: 3,
//       title: 'Why Tailwind CSS is still King in 2026',
//       author: 'Alex River',
//       readTime: '5 min',
//       excerpt:
//         'Exploring the utility-first revolution and its impact on modern developer workflows...',
//       image:
//         'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600',
//     },
//     {
//       id: 4,
//       title: 'Remote Work: The Next Chapter',
//       author: 'Sarah Jenkins',
//       readTime: '8 min',
//       excerpt:
//         'How distributed teams are evolving beyond Zoom calls into virtual offices...',
//       image:
//         'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600',
//     },
//     {
//       id: 5,
//       title: 'The Rise of Neo-Brutalism',
//       author: 'Marc Chen',
//       readTime: '4 min',
//       excerpt:
//         'Bold colors, thick borders, and why the internet is getting loud again...',
//       image:
//         'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
//       {/* 2. HERO SECTION */}
//       <header className="relative pt-40 pb-20 overflow-hidden">
//         {/* Animated Background Blob */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />

//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest uppercase mb-6 inline-block">
//               Insight • Inspiration • Innovation
//             </span>
//             <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
//               A space for <br />
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
//                 curious minds.
//               </span>
//             </h1>
//             <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
//               Deep dives into technology, design, and the digital culture
//               shaping our future. Stay ahead of the curve.
//             </p>
//           </motion.div>
//         </div>
//       </header>

//       {/* 3. FEATURED POSTS (Bento Layout) */}
//       <section className="max-w-7xl mx-auto px-6 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
//           {featuredPosts.map((post, index) => (
//             <motion.div
//               key={post.id}
//               whileHover={{ scale: 0.99 }}
//               className={`relative overflow-hidden rounded-3xl group cursor-pointer ${index === 0 ? 'md:col-span-8' : 'md:col-span-4'}`}
//             >
//               <img
//                 src={post.image}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 alt=""
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
//               <div className="absolute bottom-0 p-8 w-full">
//                 <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 block">
//                   {post.category}
//                 </span>
//                 <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-purple-300 transition-colors">
//                   {post.title}
//                 </h3>
//                 <div className="flex items-center justify-between mt-4">
//                   <span className="text-sm text-gray-400">{post.date}</span>
//                   <ArrowRight
//                     className="group-hover:translate-x-2 transition-transform"
//                     size={20}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 4. LATEST ARTICLES GRID */}
//       <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
//         <div className="flex items-end justify-between mb-12">
//           <div>
//             <h2 className="text-4xl font-bold tracking-tighter">
//               Latest Stories
//             </h2>
//             <p className="text-gray-500 mt-2">
//               New articles published every week.
//             </p>
//           </div>
//           <button className="hidden sm:flex items-center gap-2 text-sm font-bold border-b-2 border-purple-500 pb-1">
//             View Archive <ArrowRight size={16} />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {latestPosts.map((post) => (
//             <article key={post.id} className="group cursor-pointer">
//               <div className="overflow-hidden rounded-2xl mb-6 aspect-video">
//                 <img
//                   src={post.image}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   alt=""
//                 />
//               </div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="h-[1px] w-8 bg-purple-500"></span>
//                 <span className="text-xs font-medium text-gray-400 uppercase tracking-tighter">
//                   By {post.author} • {post.readTime} Read
//                 </span>
//               </div>
//               <h4 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
//                 {post.title}
//               </h4>
//               <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
//                 {post.excerpt}
//               </p>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* 5. NEWSLETTER (CTA) */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
//               Join the 10k+ readers.
//             </h2>
//             <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
//               Weekly insights on tech and design, straight to your inbox. No
//               spam, ever.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-white placeholder:text-gray-500"
//               />
//               <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-400 transition-all whitespace-nowrap">
//                 Get Access
//               </button>
//             </form>
//           </div>
//           {/* Decorative radial circles */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full" />
//         </div>
//       </section>

//       {/* 6. FOOTER */}
//       <footer className="border-t border-white/5 pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
//             <div className="col-span-2">
//               <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
//                 <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center">
//                   <Feather size={18} />
//                 </div>
//                 <span>LUMINA</span>
//               </div>
//               <p className="text-gray-500 max-w-xs leading-relaxed">
//                 A digital publication exploring the intersections of human
//                 creativity and technological evolution.
//               </p>
//             </div>
//             <div>
//               <h5 className="font-bold mb-6">Explore</h5>
//               <ul className="space-y-4 text-gray-500 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Topics
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Podcast
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Interviews
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="font-bold mb-6">Social</h5>
//               <div className="flex gap-4">
//                 <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                   <Twitter size={18} />
//                 </button>
//                 <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                   <Github size={18} />
//                 </button>
//                 <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                   <Instagram size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-white/5 gap-4">
//             <p className="text-gray-600 text-sm">
//               © 2026 Lumina Media. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-xs text-gray-600 font-medium">
//               <a href="#">Privacy Policy</a>
//               <a href="#">Terms of Service</a>
//               <a href="#">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
