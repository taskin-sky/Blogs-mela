import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllBlogsAPI } from '../lib/api/blog.api';
import { BlogCardLoading } from '../components/Blog/BlogCardLoading';
import { HomeBlogCard } from '../components/Blog/HomeBlogCard';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const { data: blogs, isLoading } = useQuery({
    queries: ['blogs'],
    queryFn: getAllBlogsAPI,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!blogs || blogs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [blogs]);

  const navigate = useNavigate();

  if (isLoading) {
    return <BlogCardLoading />;
  }

  return (
    <div className="flex gap-4  min-h-screen p-4">
      {/* left */}
      <div className="w-2/8  rounded-md shadow-2xl ">
        <div className="flex justify-center mt-4 mb-2 ">
          <button
            onClick={() => navigate('/create-blog')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
               bg-linear-to-r bg-blue-400 to-indigo-600
               text-white font-semibold
               shadow-md hover:shadow-xl
               hover:bg-blue-500 hover:to-indigo-700
               active:scale-95 transition-all duration-300
               hover:-translate-y-0.5"
          >
            ✍️ Create Blog
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        <div className="mx-1 md:mx-8 lg:mx-6 my-10">
          <div className="relative h-80 w-full overflow-hidden rounded-xl">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  animation:
                    currentIndex === index ? 'fadeIn 2s ease-in-out' : 'none',
                }}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {index + 1} / {blogs.length}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* middle */}
      <div className="w-5/8  rounded-md shadow-2xl p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <HomeBlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      {/* right */}
      <div className="w-1/8 rounded-md bg-gray-900 shadow-2xl p-2 pt-4  ">
        <div className="shadow-2xl bg-gray-800 rounded-2xl p-3 ">
          <h2 className="flex justify-center font-bold text-green-500 mb-4">
            Authors
          </h2>
          {blogs.map((blog) => (
            <p className="text-xl font-bold text-green-400 text-[10px] mb-2  group-hover:text-blue-600 transition">
              * {blog.author}
            </p>
          ))}
        </div>

        <div className="mt-4 p-2">
          <h2 className="text-xl text-blue-500 text-center mb-2">
            Recent blogs
          </h2>
          {blogs.map((blog) => (
            <p className="text-[12px] font-bold text-blue-400 mb-2  group-hover:text-blue-600 transition">
              * {blog.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
