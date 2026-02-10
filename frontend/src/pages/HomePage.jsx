import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllBlogsAPI } from '../lib/api/blog.api';
import { BlogCardLoading } from '../components/Blog/BlogCardLoading';
import { HomeBlogCard } from '../components/Blog/HomeBlogCard';
import { useNavigate } from 'react-router';
import {
  CalendarDays,
  User,
  Clock,
  TrendingUp,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

const HomePage = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: getAllBlogsAPI,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!blogs || blogs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Get 3 most recent blogs for featured section
    const sortedByDate = [...blogs]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3);
    setFeaturedBlogs(sortedByDate);

    return () => clearInterval(interval);
  }, [blogs]);

  // Get unique authors
  const uniqueAuthors = [
    ...new Set(blogs?.map((blog) => blog.author) || []),
  ].slice(0, 5);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <BlogCardLoading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Welcome to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                  Blogs-Mela
                </span>
              </h1>
              <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                Discover thought-provoking articles, expert insights, and
                inspiring stories from our community of writers.
              </p>
              <button
                onClick={() => navigate('/create-blog')}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl
                   bg-gradient-to-r from-cyan-500 to-blue-600
                   text-white font-semibold text-lg
                   shadow-lg hover:shadow-2xl
                   hover:from-cyan-600 hover:to-blue-700
                   active:scale-95 transition-all duration-300
                   hover:-translate-y-1"
              >
                <BookOpen size={22} />
                Write Your Story
                <ChevronRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={22}
                />
              </button>
            </div>

            {/* Stats Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">
                    {blogs?.length || 0}
                  </div>
                  <div className="text-sm text-gray-300">Total Blogs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">
                    {uniqueAuthors.length}
                  </div>
                  <div className="text-sm text-gray-300">Active Writers</div>
                </div>
                <div className="text-center col-span-2">
                  <div className="text-2xl font-bold text-green-400 flex items-center justify-center gap-2">
                    <TrendingUp size={20} />
                    Trending Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Carousel Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Stories
            </h2>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl">
            {blogs?.map((blog, index) => (
              <div
                key={blog._id}
                className="absolute inset-0 transition-all duration-1000"
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
              >
                <div className="relative h-full">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-3xl mx-auto">
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <span className="px-3 py-1 bg-blue-600 rounded-full">
                          Featured
                        </span>
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{blog.readTime || '5 min read'}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {blog.title}
                      </h3>
                      <p className="text-gray-200 mb-6 line-clamp-2">
                        {blog.description || blog.content?.substring(0, 150)}...
                      </p>
                      <button
                        onClick={() => navigate(`/blog/${blog._id}`)}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Read Full Story
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {blogs?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3">
            {/* Recent Blogs Grid */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Latest Articles
                  </h2>
                </div>
                <button
                  onClick={() => navigate('/blogs')}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
                >
                  View All
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs?.map((blog) => (
                  <HomeBlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            </div>

            {/* Featured Blogs Sidebar in Mobile View */}
            <div className="lg:hidden mb-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={20} />
                  Trending This Week
                </h3>
                <div className="space-y-4">
                  {featuredBlogs.map((blog, index) => (
                    <div
                      key={blog._id}
                      className="bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
                      onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl font-bold text-cyan-300">
                          0{index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {blog.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <User size={12} />
                            <span>{blog.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Popular Authors */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <User className="text-white" size={20} />
                </div>
                Top Contributors
              </h3>
              <div className="space-y-4">
                {uniqueAuthors.map((author, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                        {author.charAt(0).toUpperCase()}
                      </div>
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {blogs?.filter((b) => b.author === author).length}{' '}
                        articles
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Blogs List */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <CalendarDays className="text-white" size={20} />
                </div>
                Recently Published
              </h3>
              <div className="space-y-4">
                {blogs?.slice(0, 5).map((blog) => (
                  <div
                    key={blog._id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/blog/${blog._id}`)}
                  >
                    <div className="flex gap-3 items-start p-3 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <User size={12} />
                          <span>{blog.author}</span>
                          <span>•</span>
                          <Clock size={12} />
                          <span>{blog.readTime || '3 min read'}</span>
                        </div>
                      </div>
                      <ChevronRight
                        className="text-gray-400 group-hover:text-blue-500 transition-colors"
                        size={18}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4">
                Get the latest articles delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
                <button className="w-full px-4 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">BlogSphere</h3>
              <p className="text-gray-400">Where ideas meet inspiration</p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            © {new Date().getFullYear()} Blogs-Mela. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
