import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Globe, 
  BookOpen, 
  Heart, 
  MessageCircle, 
  Eye, 
  Edit2,
  Camera,
  Settings,
  LogOut,
  Award,
  TrendingUp,
  Clock,
  Share2,
  Bookmark,
  PenTool,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from 'lucide-react';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('articles');

  // User data
  const user = {
    name: 'Taskin M Mubassir',
    email: 'taskin.mubassir@blogsmela.com',
    username: '@taskin_m_mubassir',
    bio: 'Passionate writer and tech enthusiast. Sharing knowledge about web development, programming, and technology trends. Love to explore new things and share with the community.',
    avatar: '../../public/taskin.png', // Using the provided image
    coverImage: '../../public/signature.jpg',
    location: 'Dhaka, Bangladesh',
    website: 'https://taskin-mubassir-portfolio.netlify.app',
    joinedDate: 'January 2024',
    social: {
      github: 'taskinmubassir',
      twitter: 'taskin_m',
      linkedin: 'taskin-mubassir'
    },
    stats: {
      articles: 24,
      followers: 1250,
      following: 180,
      views: 45200,
      likes: 3450,
      comments: 890
    },
    badges: [
      { name: 'Top Writer', icon: '🏆', color: 'from-yellow-400 to-amber-500' },
      { name: 'Verified', icon: '✅', color: 'from-blue-400 to-cyan-500' },
      { name: 'Tech Expert', icon: '💻', color: 'from-purple-400 to-pink-500' },
      { name: '100 Articles', icon: '📚', color: 'from-green-400 to-emerald-500' }
    ]
  };

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'Getting Started with React and Tailwind CSS',
      excerpt: 'Learn how to build modern web applications with React and Tailwind CSS...',
      category: 'Web Development',
      date: '2024-02-10',
      readTime: 8,
      views: 1240,
      likes: 89,
      comments: 23,
      image: null
    },
    {
      id: 2,
      title: 'Understanding JavaScript Closures',
      excerpt: 'Deep dive into JavaScript closures and how they work under the hood...',
      category: 'JavaScript',
      date: '2024-02-05',
      readTime: 6,
      views: 890,
      likes: 56,
      comments: 12,
      image: null
    },
    {
      id: 3,
      title: '10 Tips for Better Code Organization',
      excerpt: 'Improve your code quality with these practical organization tips...',
      category: 'Best Practices',
      date: '2024-01-28',
      readTime: 5,
      views: 2100,
      likes: 156,
      comments: 34,
      image: null
    }
  ];

  // Saved articles
  const savedArticles = [
    {
      id: 4,
      title: 'The Future of Artificial Intelligence',
      author: 'Sarah Johnson',
      date: '2024-02-08',
      readTime: 10
    },
    {
      id: 5,
      title: 'Mastering CSS Grid Layout',
      author: 'Mike Chen',
      date: '2024-02-01',
      readTime: 7
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Cover Photo & Profile Header */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-72 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20">
         <img
                  src={user.coverImage}
                  alt={'cover image'}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"> 
            
            </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Edit Cover Button */}
          <button className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white transition-colors flex items-center gap-2 shadow-lg">
            <Camera size={18} />
            Edit Cover
          </button>
        </div>

        {/* Profile Info Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24 bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6">
              {/* Avatar */}
              <div className="relative -mt-24 lg:-mt-28">
                <div className="relative">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&size=160&background=0D9488&color=fff`;
                      }}
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110">
                    <Camera size={18} />
                  </button>
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {user.name}
                      </h1>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Award size={14} />
                        Verified Writer
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <User size={16} />
                        {user.username}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail size={16} />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {user.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        Joined {user.joinedDate}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all flex items-center gap-2 hover:scale-105">
                      <Edit2 size={18} />
                      Edit Profile
                    </button>
                    <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                      <Settings size={20} />
                    </button>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-6 max-w-3xl">
                  <p className="text-gray-700 leading-relaxed">
                    {user.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Globe size={18} />
                    <span className="text-sm">{user.website}</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter size={18} />
                    <span className="text-sm">@{user.social.twitter}</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Github size={18} />
                    <span className="text-sm">{user.social.github}</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors">
                    <Linkedin size={18} />
                    <span className="text-sm">{user.social.linkedin}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <BookOpen className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{user.stats.articles}</div>
            <div className="text-sm text-gray-600">Articles</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Heart className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{formatNumber(user.stats.likes)}</div>
            <div className="text-sm text-gray-600">Likes</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Eye className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{formatNumber(user.stats.views)}</div>
            <div className="text-sm text-gray-600">Views</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{user.stats.comments}</div>
            <div className="text-sm text-gray-600">Comments</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <User className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{formatNumber(user.stats.followers)}</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{user.stats.following}</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award size={24} className="text-yellow-500" />
            Achievements & Badges
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {user.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-white text-xl`}>
                  {badge.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{badge.name}</div>
                  <div className="text-xs text-gray-600">Earned badge</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('articles')}
              className={`pb-4 px-1 font-semibold transition-colors relative ${
                activeTab === 'articles'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <PenTool size={18} />
                My Articles
              </span>
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`pb-4 px-1 font-semibold transition-colors relative ${
                activeTab === 'saved'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Bookmark size={18} />
                Saved
              </span>
            </button>
            <button
              onClick={() => setActiveTab('drafts')}
              className={`pb-4 px-1 font-semibold transition-colors relative ${
                activeTab === 'drafts'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Clock size={18} />
                Drafts
              </span>
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Articles */}
          <div className="lg:col-span-2">
            {activeTab === 'articles' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Articles</h3>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                    View All
                    <ChevronRight size={16} />
                  </button>
                </div>
                
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl">
                        📝
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full mb-2">
                              {article.category}
                            </span>
                            <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {new Date(article.date).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {article.readTime} min read
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye size={12} />
                                {formatNumber(article.views)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart size={12} />
                                {article.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle size={12} />
                                {article.comments}
                              </span>
                            </div>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Share2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Saved Articles</h3>
                {savedArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-purple-600">
                          📚
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                          <div className="flex items-center gap-3 text-xs text-gray-600">
                            <span className="flex items-center gap-1">
                              <User size={12} />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(article.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {article.readTime} min read
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
                        Read
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'drafts' && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenTool className="text-gray-400" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">No drafts yet</h4>
                <p className="text-gray-600 mb-6">Start writing your next great article!</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Write New Article
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-8">
            {/* About Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User size={20} />
                About
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={18} className="text-gray-400" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Globe size={18} className="text-gray-400" />
                  <a href={user.website} className="text-blue-600 hover:underline">{user.website}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={18} className="text-gray-400" />
                  <span>Joined {user.joinedDate}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Top Topics</h4>
                  <span className="text-xs text-gray-500">Based on articles</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full">React</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-sm rounded-full">JavaScript</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm rounded-full">Tailwind</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-rose-50 text-red-700 text-sm rounded-full">Next.js</span>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Performance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Total Views</span>
                  <span className="text-2xl font-bold">{formatNumber(user.stats.views)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engagement Rate</span>
                  <span className="text-2xl font-bold">8.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg. Read Time</span>
                  <span className="text-2xl font-bold">4.5m</span>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-400/30">
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium flex items-center justify-center gap-2">
                    View Detailed Analytics
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock size={20} />
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    ✍️
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Published "Getting Started with React"</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    💬
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Replied to comment on your article</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    ⭐
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Earned "Tech Expert" badge</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button className="w-full py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

