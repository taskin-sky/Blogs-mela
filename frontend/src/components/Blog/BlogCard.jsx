import React from 'react';

export const BlogCard = ({ blog }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* Image placeholder */}
      <div className="h-48 bg-linear-to-r from-blue-500 to-indigo-600">
        {blog.img ? (
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase">
          {blog.category || 'Blog'}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
          {blog.title}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {blog.shortDescription || blog.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>✍️ {blog.author}</span>
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="flex justify-around mb-2">
        <button className="text-blue-600 font-semibold">
          <a href={`/blogs/${blog._id}`}>Read More..</a>
        </button>
        <button className="text-green-600 font-semibold">
          <a>Delete</a>
        </button>
      </div>
    </div>
  );
};
