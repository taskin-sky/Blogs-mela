import React, { useState, useMemo } from "react";
import { useQuery } from '@tanstack/react-query';
import { Profile } from '../components/Profile';
import { getAllContactMessageAPI } from '../lib/api/contact.api';
import { 
  Mail, 
  User, 
  Calendar, 
  MessageSquare, 
  RefreshCw, 
  Search,
  Filter,
  ChevronDown,
  X,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Archive,
  Star,
  Trash2,
  Eye,
  Send,
  Phone,
  MapPin,
  MoreVertical,
  Inbox,
  Reply,
  Tag
} from 'lucide-react';

const ContactMessagePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageDetail, setShowMessageDetail] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['messages'],
    queryFn: getAllContactMessageAPI,
  });

  const messages = data?.data || [];

  // Filter and sort messages
  const filteredMessages = useMemo(() => {
    if (!messages.length) return [];

    let filtered = [...messages];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(msg => 
        msg.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.message?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(msg => 
        selectedFilter === 'read' ? msg.isRead : 
        selectedFilter === 'unread' ? !msg.isRead :
        selectedFilter === 'starred' ? msg.isStarred : true
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === 'oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return 0;
    });

    return filtered;
  }, [messages, searchQuery, selectedFilter, sortBy]);

  const stats = {
    total: messages.length,
    unread: messages.filter(m => !m.isRead).length,
    starred: messages.filter(m => m.isStarred).length,
    today: messages.filter(m => {
      const today = new Date();
      const msgDate = new Date(m.createdAt);
      return msgDate.toDateString() === today.toDateString();
    }).length
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return `Today at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}`;
    } else if (diffDays === 1) {
      return `Yesterday at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}`;
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      });
    }
  };

  const handleSelectMessage = (messageId) => {
    if (selectedMessages.includes(messageId)) {
      setSelectedMessages(selectedMessages.filter(id => id !== messageId));
    } else {
      setSelectedMessages([...selectedMessages, messageId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(m => m._id));
    }
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setShowMessageDetail(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Loading Skeleton */}
          <div className="animate-pulse">
            {/* Header */}
            <div className="h-12 w-72 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl mb-6"></div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-32 bg-white rounded-2xl shadow-lg p-6">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 w-16 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            {/* Search & Filter Bar */}
            <div className="h-16 bg-white rounded-2xl shadow-lg mb-8"></div>

            {/* Messages List */}
            <div className="space-y-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-32 bg-white rounded-2xl shadow-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border border-red-100">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-red-600" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error.message || 'Failed to load messages'}</p>
          <button 
            onClick={() => refetch()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl hover:shadow-lg hover:from-red-700 hover:to-rose-700 transition-all duration-300"
          >
            <RefreshCw size={18} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Profile />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        
      {/* Message Detail Modal */}
      {showMessageDetail && selectedMessage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <MessageSquare size={20} />
                Message Details
              </h3>
              <button
                onClick={() => setShowMessageDetail(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {selectedMessage.fullName?.charAt(0)?.toUpperCase() || 'A'}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{selectedMessage.fullName}</h4>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={14} />
                      <a href={`mailto:${selectedMessage.email}`} className="hover:text-blue-600">
                        {selectedMessage.email}
                      </a>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedMessage.isRead 
                    ? 'bg-gray-100 text-gray-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {selectedMessage.isRead ? 'Read' : 'Unread'}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>Received: {formatDate(selectedMessage.createdAt)}</span>
                </div>
                {selectedMessage.subject && (
                  <div className="flex items-start gap-2">
                    <Tag size={14} className="mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm font-medium text-gray-700">Subject: </span>
                      <span className="text-sm text-gray-800">{selectedMessage.subject}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <MessageSquare size={16} />
                  Message Content
                </h5>
                <div className="bg-white border border-gray-200 rounded-xl p-5 text-gray-700 leading-relaxed">
                  {selectedMessage.message}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-6">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <Archive size={16} />
                  Archive
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                  <Reply size={16} />
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                <Inbox className="text-white" size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Contact Inbox
              </h1>
            </div>
            <p className="text-gray-600">
              Manage and respond to messages from your readers
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center gap-2 shadow-sm">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Messages</p>
                <h3 className="text-3xl font-bold text-gray-800">{stats.total}</h3>
                <p className="text-xs text-gray-400 mt-2">All time messages</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Inbox className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Unread</p>
                <h3 className="text-3xl font-bold text-green-600">{stats.unread}</h3>
                <p className="text-xs text-gray-400 mt-2">Awaiting response</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <Mail className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Starred</p>
                <h3 className="text-3xl font-bold text-yellow-600">{stats.starred}</h3>
                <p className="text-xs text-gray-400 mt-2">Important messages</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl">
                <Star className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Today</p>
                <h3 className="text-3xl font-bold text-purple-600">{stats.today}</h3>
                <p className="text-xs text-gray-400 mt-2">Received today</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                <Clock className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search Input */}
            <div className="flex-1 w-full relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search messages by name, email, subject, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all duration-300 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter Dropdown */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-initial">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none w-full lg:w-40 px-4 py-3 pl-10 pr-8 
                           border-2 border-gray-200 rounded-xl 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                           transition-all duration-300 bg-white"
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="starred">Starred</option>
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>

              {/* Sort Dropdown */}
              <div className="relative flex-1 lg:flex-initial">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full lg:w-40 px-4 py-3 pl-10 pr-8 
                           border-2 border-gray-200 rounded-xl 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                           transition-all duration-300 bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedFilter !== 'all') && (
            <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-blue-900">
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs">
                  Filter: {selectedFilter}
                  <button onClick={() => setSelectedFilter('all')} className="hover:text-green-900">
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Messages Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedMessages.length === filteredMessages.length && filteredMessages.length > 0}
                onChange={handleSelectAll}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">Select All</span>
            </div>
            {selectedMessages.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{selectedMessages.length} selected</span>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center gap-1">
                  <Archive size={14} />
                  Archive
                </button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm flex items-center gap-1">
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500">
            Showing {filteredMessages.length} of {messages.length} messages
          </span>
        </div>

        {/* Messages Grid */}
        {filteredMessages.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Inbox className="text-gray-400" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No messages found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchQuery 
                ? `No results match "${searchQuery}". Try different keywords or clear filters.`
                : 'Your inbox is empty. Messages from readers will appear here.'}
            </p>
            {(searchQuery || selectedFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {filteredMessages.map((message) => (
              <div
                key={message._id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 
                  ${!message.isRead ? 'border-l-8 border-l-blue-500' : 'border-gray-100'} 
                  ${selectedMessages.includes(message._id) ? 'bg-blue-50/50 border-blue-200' : ''}`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Checkbox */}
                    <div className="pt-1">
                      <input
                        type="checkbox"
                        checked={selectedMessages.includes(message._id)}
                        onChange={() => handleSelectMessage(message._id)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </div>

                    {/* Avatar */}
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg
                        ${!message.isRead 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'}`}
                      >
                        {message.fullName?.charAt(0)?.toUpperCase() || 'A'}
                      </div>
                      {!message.isRead && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className={`text-lg ${!message.isRead ? 'font-bold' : 'font-semibold'} text-gray-800`}>
                              {message.fullName || 'Anonymous'}
                            </h3>
                            {message.isStarred && (
                              <Star className="text-yellow-500 fill-yellow-500" size={14} />
                            )}
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock size={12} />
                              {formatDate(message.createdAt)}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Mail size={12} />
                            <span className="truncate">{message.email}</span>
                          </div>

                          {message.subject && (
                            <div className="mb-2">
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full">
                                {message.subject}
                              </span>
                            </div>
                          )}

                          <p className={`text-gray-600 line-clamp-2 text-sm leading-relaxed 
                            ${!message.isRead ? 'font-medium' : ''}`}
                          >
                            {message.message}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => handleViewMessage(message)}
                            className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                            title="View Message"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                            title="Reply"
                          >
                            <Reply size={18} />
                          </button>
                          <button
                            className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors"
                            title="Star"
                          >
                            <Star size={18} fill={message.isStarred ? 'currentColor' : 'none'} />
                          </button>
                          <button
                            className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                            title="More Options"
                          >
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Reply (Mobile) */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between lg:hidden">
                    <a 
                      href={`mailto:${message.email}`}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <Mail size={14} />
                      Reply via Email
                    </a>
                    <span className={`text-xs px-2 py-1 rounded-full 
                      ${!message.isRead ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {!message.isRead ? 'Unread' : 'Read'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredMessages.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{filteredMessages.length}</span> of{' '}
              <span className="font-medium">{messages.length}</span> messages
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all">
                1
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors" disabled>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default ContactMessagePage;