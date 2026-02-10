import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllBlogsAPI } from '../lib/api/blog.api';
import { BlogCardLoading } from '../components/Blog/BlogCardLoading';
import { BlogCard } from '../components/Blog/BlogCard';
import {
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  Calendar,
  TrendingUp,
  Clock,
  BookOpen,
  X,
  RefreshCw,
} from 'lucide-react';

const BlogsPage = () => {
  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: getAllBlogsAPI,
  });

  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories from blogs
  const categories = blogs
    ? [...new Set(blogs.map((blog) => blog.category))]
    : [];

  // Filter and sort blogs
  const filteredBlogs = blogs
    ? blogs
        .filter((blog) => {
          const matchesSearch =
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCategory =
            selectedCategory === 'all' || blog.category === selectedCategory;
          return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
          switch (sortBy) {
            case 'newest':
              return new Date(b.publishedAt) - new Date(a.publishedAt);
            case 'oldest':
              return new Date(a.publishedAt) - new Date(b.publishedAt);
            case 'popular':
              // Assuming views or likes property exists
              return (b.views || 0) - (a.views || 0);
            default:
              return 0;
          }
        })
    : [];

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('newest');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <BlogCardLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <BookOpen size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Explore{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                Blogs Mela
              </span>
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Discover stories, ideas, and knowledge from our community of writers
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300">
                {blogs?.length || 0}
              </div>
              <div className="text-blue-200">Total Blogs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300">
                {categories.length}
              </div>
              <div className="text-blue-200">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300">24/7</div>
              <div className="text-blue-200">Fresh Content</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 -mt-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search blogs by title, content, or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                           transition-all duration-300 placeholder-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Filter size={20} />
              Filters
              <ChevronDown
                className={`transition-transform ${showFilters ? 'rotate-180' : ''}`}
                size={16}
              />
            </button>

            {/* View Mode Buttons */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              >
                <Grid
                  size={20}
                  className={
                    viewMode === 'grid' ? 'text-blue-600' : 'text-gray-500'
                  }
                />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
              >
                <List
                  size={20}
                  className={
                    viewMode === 'list' ? 'text-blue-600' : 'text-gray-500'
                  }
                />
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl appearance-none bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl appearance-none bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-end gap-3">
                <button
                  onClick={handleResetFilters}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <RefreshCw size={16} />
                  Reset
                </button>
                <button
                  onClick={() => refetch()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw size={16} />
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="hover:text-blue-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="hover:text-green-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredBlogs.length} Blog{filteredBlogs.length !== 1 ? 's' : ''}{' '}
              Found
            </h2>
            {searchQuery && (
              <p className="text-gray-600 mt-1">
                Showing results for "{searchQuery}"
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Clock size={14} />
              Sorted by{' '}
              {sortBy === 'newest'
                ? 'Newest'
                : sortBy === 'oldest'
                  ? 'Oldest'
                  : 'Popular'}
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <TrendingUp size={14} />
              {blogs?.length || 0} total blogs in database
            </div>
          </div>
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              No blogs found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              {searchQuery
                ? `No results found for "${searchQuery}". Try different keywords or browse all categories.`
                : 'No blogs available in this category. Check back soon!'}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              View All Blogs
            </button>
          </div>
        )}

        {/* Blogs Grid/List */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }
        >
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className={
                viewMode === 'list'
                  ? 'bg-white rounded-2xl shadow-lg overflow-hidden'
                  : ''
              }
            >
              <BlogCard blog={blog} viewMode={viewMode} />
            </div>
          ))}
        </div>

        {/* Load More / Pagination */}
        {filteredBlogs.length > 0 && (
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-xl hover:shadow-md transition-all border border-gray-300 hover:border-gray-400">
              Load More Blogs
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Showing {filteredBlogs.length} of {blogs?.length || 0} blogs
            </p>
          </div>
        )}

        {/* Categories Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Browse by Category
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.slice(0, 8).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Never Miss a Story</h3>
            </div>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and get the latest articles, writing
              tips, and updates from Blogs Mela
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
