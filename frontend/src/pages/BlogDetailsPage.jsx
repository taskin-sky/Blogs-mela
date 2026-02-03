import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getBlogDetailsAPI } from '../lib/api/blog.api';

const BlogDetailsPage = () => {
  const { blogId } = useParams();

  const {
    data: blogDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['blog-details', blogId],
    queryFn: () => getBlogDetailsAPI({ blogId }),
  });

  // 🟡 Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // 🔴 Error state
  if (isError || !blogDetails) {
    return (
      <p className="text-center text-red-500 mt-20">
        Failed to load blog details
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/30 to-blue-50/50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Elegant Card Container */}
        <div
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden 
                     border border-gray-100 hover:shadow-2xl transition-all duration-500"
        >
          {/* Cover Image with Overlay */}
          <div className="relative w-full h-80 overflow-hidden">
            {blogDetails.img ? (
              <div className="relative w-full h-full">
                <img
                  src={blogDetails.img}
                  alt={blogDetails.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            ) : (
              <div
                className="w-full h-full flex items-center justify-center 
                          bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">✍️</div>
                  <h2 className="text-3xl font-bold text-white tracking-wider">
                    Blogs Mela
                  </h2>
                </div>
              </div>
            )}

            {/* Category Badge */}
            <span
              className="absolute top-6 left-6 bg-white/95 text-blue-600 px-4 py-2 
                          rounded-full text-sm font-semibold shadow-lg 
                          border border-blue-100 hover:bg-white transition-colors duration-300"
            >
              {blogDetails.category}
            </span>
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-10">
            {/* Title with subtle gradient */}
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 
                        bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            >
              {blogDetails.title}
            </h1>

            {/* Author & Date in elegant layout */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <span
                  className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 
                             rounded-full flex items-center justify-center"
                >
                  ✍️
                </span>
                <span className="font-medium text-gray-800">
                  {blogDetails.author}
                </span>
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <span
                  className="w-8 h-8 bg-gradient-to-r from-rose-100 to-pink-100 
                             rounded-full flex items-center justify-center"
                >
                  📅
                </span>
                <span className="font-medium text-gray-800">
                  {new Date(blogDetails.publishedAt).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </span>
              </span>
            </div>

            {/* Elegant Divider */}
            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-gray-400">❖</span>
              </div>
            </div>

            {/* Short Description in elegant blockquote */}
            {blogDetails.shortDescription && (
              <div className="relative mb-10">
                <div className="absolute -left-4 top-0 text-3xl text-blue-200">
                  "
                </div>
                <p
                  className="text-lg text-gray-700 font-light pl-8 italic leading-relaxed 
                          border-l-4 border-blue-100 pl-6 py-2 bg-blue-50/30 rounded-r-lg"
                >
                  {blogDetails.shortDescription}
                </p>
                <div className="absolute -right-4 bottom-0 text-3xl text-blue-200">
                  "
                </div>
              </div>
            )}

            {/* Main Content with elegant typography */}
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed 
                        prose-headings:text-gray-900 prose-headings:font-bold
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-4 prose-blockquote:border-blue-200 
                        prose-blockquote:bg-blue-50/30 prose-blockquote:italic
                        prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:text-gray-600
                        prose-img:rounded-lg prose-img:shadow-md
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                        prose-pre:bg-gray-900 prose-pre:text-gray-100
                        prose-hr:border-gray-200
                        prose-ul:list-disc prose-ol:list-decimal
                        prose-li:marker:text-blue-400"
            >
              {blogDetails.description}
            </div>

            {/* Floating decorative elements */}
            <div
              className="absolute right-8 -top-6 w-12 h-12 bg-gradient-to-r from-blue-200 to-indigo-200 
                        rounded-full blur-xl opacity-50"
            ></div>
            <div
              className="absolute left-8 -bottom-6 w-16 h-16 bg-gradient-to-r from-rose-200 to-pink-200 
                        rounded-full blur-xl opacity-50"
            ></div>
          </div>
        </div>

        {/* Floating back button (optional) */}
        <div className="mt-8 text-center">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm 
                         rounded-full text-gray-700 font-medium shadow-lg hover:shadow-xl 
                         hover:bg-white transition-all duration-300 border border-gray-200 
                         hover:-translate-y-1"
          >
            <span className="text-lg">←</span>
            Back to Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
