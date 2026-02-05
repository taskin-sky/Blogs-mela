import React from 'react';

export const HomeBlogCard = ({ blog }) => {
  return (
    <div className="relative pl-10 pb-8">
      {/* Timeline line */}
      <div className="absolute left-3 top-0 h-full w-px bg-gray-300"></div>

      {/* Dot */}
      <div className="absolute left-1.5 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>

      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-gray-900 mb-1">{blog.title}</h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {blog.shortDescription}
        </p>

        <div className="text-xs text-gray-400 flex justify-between">
          <span>{blog.author}</span>
          <span>{new Date(blog.publishedAt).toDateString()}</span>
        </div>
      </div>
    </div>
  );
};
