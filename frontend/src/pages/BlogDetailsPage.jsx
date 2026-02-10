import { useState } from 'react'; // Add this import
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router';
import { getBlogDetailsAPI } from '../lib/api/blog.api';
import {
  Calendar,
  User,
  Clock,
  Tag,
  BookOpen,
  Share2,
  Heart,
  Bookmark,
  ArrowLeft,
  MessageCircle,
  Eye,
  TrendingUp,
} from 'lucide-react';

const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const {
    data: blogDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['blog-details', blogId],
    queryFn: () => getBlogDetailsAPI({ blogId }),
  });

  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shareMenu, setShareMenu] = useState(false);

  const handleShare = () => {
    setShareMenu(!shareMenu);
    // Implement share functionality
  };

  const estimatedReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text?.split(/\s+/).length || 0;
    return Math.ceil(words / wordsPerMinute);
  };

  const readTime = blogDetails?.description
    ? estimatedReadTime(blogDetails.description)
    : 0;

  // 🟡 Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-100 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0"></div>
          </div>
          <p className="mt-6 text-gray-600 font-medium">
            Loading your story...
          </p>
        </div>
      </div>
    );
  }

  // 🔴 Error state
  if (isError || !blogDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-red-500 text-2xl">!</div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Story Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            We couldn't find the blog you're looking for.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <ArrowLeft
                className="group-hover:-translate-x-1 transition-transform"
                size={20}
              />
              <span className="font-medium text-gray-700">Back to Home</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                {blogDetails.category || 'Uncategorized'}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
              {blogDetails.img ? (
                <img
                  src={blogDetails.img}
                  alt={blogDetails.title}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-[400px] bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <BookOpen size={48} className="mx-auto mb-4 opacity-80" />
                    <h2 className="text-2xl font-bold">Blogs Mela</h2>
                  </div>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blogDetails.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {blogDetails.author?.charAt(0)?.toUpperCase() || 'B'}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {blogDetails.author || 'Anonymous'}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <User size={12} />
                      Author
                    </div>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300"></div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                    <Calendar className="text-rose-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {blogDetails.publishedAt
                        ? new Date(blogDetails.publishedAt).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )
                        : 'Recent'}
                    </div>
                    <div className="text-sm text-gray-500">Published</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300"></div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full flex items-center justify-center">
                    <Clock className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {readTime} min read
                    </div>
                    <div className="text-sm text-gray-500">Reading time</div>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              {blogDetails.shortDescription && (
                <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-blue-500 rounded">
                      <Tag className="text-white" size={16} />
                    </div>
                    <span className="font-semibold text-blue-700">TL;DR</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {blogDetails.shortDescription}
                  </p>
                </div>
              )}

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {blogDetails.description
                    ?.split('\n\n')
                    .map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    )) || (
                    <p className="text-gray-600 italic">
                      No content available.
                    </p>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {blogDetails.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-gray-200 hover:to-gray-300 transition-all"
                    >
                      #{tag}
                    </span>
                  )) || (
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                      #{blogDetails.category || 'Blog'}
                    </span>
                  )}
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        liked
                          ? 'bg-red-50 text-red-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                      <span>Like</span>
                      <span className="text-sm">(42)</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <MessageCircle size={20} />
                      <span>Comment</span>
                      <span className="text-sm">(12)</span>
                    </button>

                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        bookmarked
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Bookmark
                        size={20}
                        fill={bookmarked ? 'currentColor' : 'none'}
                      />
                      <span>Save</span>
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      <Share2 size={20} />
                      <span>Share</span>
                    </button>

                    {shareMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                          Copy Link
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                          Share on Twitter
                        </button>
                        <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                          Share on Facebook
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                About the Author
              </h3>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {blogDetails.author?.charAt(0)?.toUpperCase() || 'B'}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {blogDetails.author || 'Blogs Mela Author'}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Passionate writer sharing insights on{' '}
                    {blogDetails.category?.toLowerCase() || 'various topics'}.
                    Loves exploring new ideas and connecting with readers.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <BookOpen size={14} />
                      <span>12 Articles</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>5.2K Views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      <span>1.8K Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Reading Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Reading Progress
              </h3>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: '45%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>45% Complete</span>
                  <span>{readTime} min</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                In This Article
              </h3>
              <div className="space-y-2">
                {[
                  'Introduction',
                  'Main Content',
                  'Key Takeaways',
                  'Conclusion',
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded text-sm">
                        {index + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Trending Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Trending Now
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600">
                      {item}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 line-clamp-2">
                        The Future of Web Development
                      </h4>
                      <p className="text-sm text-gray-500">5 min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Never Miss a Story</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest articles delivered directly to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />
                <button className="w-full px-4 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                    Technology
                  </span>
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                    How AI is Changing the World
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Explore the impact of artificial intelligence on various
                    industries...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>John Doe</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Blogs Mela</h3>
          <p className="text-gray-400 mb-6">Where stories come to life</p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-gray-400 text-sm">
            © {new Date().getFullYear()} Blogs Mela. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailsPage;
