import React, { useState } from 'react';
import {
  Calendar,
  User,
  Clock,
  BookOpen,
  Heart,
  MessageCircle,
  Eye,
  Share2,
  Bookmark,
  MoreVertical,
  ExternalLink,
  Trash2,
  Edit,
  Tag,
} from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBlogAPI } from '../../lib/api/blog.api';
import toast from 'react-hot-toast';

export const BlogCard = ({ blog, viewMode = 'grid' }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Calculate estimated read time
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text?.split(/\s+/).length || 0;
    return Math.ceil(words / wordsPerMinute) || 1;
  };

  const readTime = calculateReadTime(blog.description || blog.shortDescription);

  const queryClient = useQueryClient();

  const deleteBlog = useMutation({
    mutationFn: (blogId) => deleteBlogAPI({blogId}),
    onSuccess: (response) => {
      if(response.status === 200){
        toast.success("Blog Deleted successfully");
        queryClient.invalidateQueries({queryKey: ['blogs']});
      }
    },
  });
  
  const handleDelete = (blogId) => {
    const confirmation = confirm(`Are you sure you want to delete this blog? This action cannot be undone.\n\nBlog title: ${blog?.title}`);
    
    if(confirmation){
      deleteBlog.mutate(blogId);
    }
  }

  // List View
  if (viewMode === 'list') {
    return (
      <div className="group flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        {/* Image */}
        <div className="sm:w-48 sm:h-32 w-full h-48 rounded-xl overflow-hidden flex-shrink-0">
          {blog.img ? (
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <BookOpen className="text-white" size={32} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-semibold rounded-full">
                  {blog.category || 'Blog'}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={10} />
                  {readTime} min read
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
                {blog.title}
              </h3>

              <p className="text-gray-600 line-clamp-2 mb-4">
                {blog.shortDescription || blog.description}
              </p>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MoreVertical size={20} className="text-gray-400" />
              </button>

              {showOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                  <button className="w-full px-4 py-2 text-left hover:bg-blue-50 text-blue-600 flex items-center gap-2">
                    <Edit size={16} />
                    Edit
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-red-50 text-red-600 flex items-center gap-2">
                    <Trash2 size={16} />
                    Delete
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 flex items-center gap-2">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {blog.author?.charAt(0)?.toUpperCase() || 'A'}
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {blog.author || 'Anonymous'}
                </span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar size={12} />
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLiked(!liked)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
                <span>42</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                <MessageCircle size={16} />
                <span>8</span>
              </button>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Bookmark
                  size={16}
                  fill={bookmarked ? 'currentColor' : 'none'}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View (Default)
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        {blog.img ? (
          <>
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
              <BookOpen size={48} className="mx-auto mb-3 opacity-80" />
              <p className="text-lg font-bold">Blogs Mela</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-semibold rounded-full shadow-md">
            {blog.category || 'Blog'}
          </span>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <Bookmark
              size={16}
              fill={bookmarked ? 'currentColor' : 'none'}
              className="text-gray-700"
            />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all">
            <Share2 size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-3">
          {blog.shortDescription || blog.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {blog.author?.charAt(0)?.toUpperCase() || 'A'}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">
                  {blog.author || 'Anonymous'}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar size={10} />
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
              <span>42</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <MessageCircle size={16} />
              <span>8</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition-colors">
              <Eye size={16} />
              <span>1.2K</span>
            </button>
          </div>

          <div className="text-xs text-gray-400">
            <Tag size={12} className="inline mr-1" />
            {blog.category || 'General'}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={`/blogs/${blog._id}`}
            className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 
                     bg-gradient-to-r from-blue-600 to-indigo-600 
                     text-white font-semibold text-sm rounded-xl
                     hover:from-blue-700 hover:to-indigo-700
                     hover:shadow-lg transition-all duration-300"
          >
            <BookOpen size={16} />
            Read Article
            <ExternalLink
              size={14}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </a>

          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <MoreVertical size={18} />
            </button>

            {showOptions && (
              <div className="absolute right-0 bottom-full mb-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-blue-50 text-blue-600 flex items-center gap-2 text-sm">
                  <Edit size={14} />
                  Edit Post
                </button>
                <button onClick={() => handleDelete(`${blog._id}`)} className="w-full px-4 py-2 text-left hover:bg-red-50 text-red-600 flex items-center gap-2 text-sm">
                  <Trash2 size={14} />
                  Delete Post
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 flex items-center gap-2 text-sm">
                  <Share2 size={14} />
                  Share Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
