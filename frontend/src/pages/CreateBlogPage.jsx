import React, { useState } from 'react';
import { createBlogAPI } from '../lib/api/blog.api';
import {
  Upload,
  Calendar,
  User,
  Tag,
  FileText,
  Type,
  X,
  Sparkles,
} from 'lucide-react';

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    shortDescription: '',
    author: 'Taskin',
    publishedAt: new Date().toISOString().split('T')[0],
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState({
    shortDescription: 0,
    description: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update character count for specific fields
    if (name === 'shortDescription' || name === 'description') {
      setCharCount((prev) => ({
        ...prev,
        [name]: value.length,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = new FormData();
      const blogData = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        shortDescription: formData.shortDescription,
        author: formData.author,
        publishedAt: formData.publishedAt,
      };

      submitData.append('data', JSON.stringify(blogData));

      if (image) {
        submitData.append('img', image);
      }

      await createBlogAPI({ data: submitData });

      // Success notification
      alert('🎉 Blog created successfully! Your story is now live.');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert(
        error.response?.data?.message ||
          error.message ||
          'Failed to create blog. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      shortDescription: '',
      author: 'Taskin',
      publishedAt: new Date().toISOString().split('T')[0],
    });
    setImage(null);
    setImagePreview(null);
    setCharCount({
      shortDescription: 0,
      description: 0,
    });
  };

  const categories = [
    'Technology',
    'Lifestyle',
    'Travel',
    'Food',
    'Health & Wellness',
    'Business',
    'Education',
    'Entertainment',
    'Science',
    'Art & Design',
    'Personal Development',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
              <Sparkles className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">
              Create Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Masterpiece
              </span>
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Share your thoughts, stories, and expertise with the world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Blog Details
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <Type size={18} />
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                             transition-all duration-300
                             placeholder-gray-400
                             hover:border-gray-300"
                    placeholder="Craft a compelling title that captures attention"
                  />
                </div>

                {/* Category & Author Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Category */}
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <Tag size={18} />
                      Category *
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border-2 border-gray-200 rounded-xl 
                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                 transition-all duration-300 appearance-none
                                 bg-white hover:border-gray-300"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45"></div>
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <User size={18} />
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl 
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Short Description */}
                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <FileText size={18} />
                    Short Description *
                    <span className="ml-auto text-sm font-normal text-gray-500">
                      {charCount.shortDescription}/150 characters
                    </span>
                  </label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    maxLength="150"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                             transition-all duration-300
                             placeholder-gray-400 resize-none
                             hover:border-gray-300"
                    placeholder="A brief summary that appears on blog cards (max 150 characters)"
                  />
                </div>

                {/* Full Description */}
                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <FileText size={18} />
                    Full Content *
                    <span className="ml-auto text-sm font-normal text-gray-500">
                      {charCount.description} characters
                    </span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="8"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                             transition-all duration-300
                             placeholder-gray-400 resize-vertical
                             hover:border-gray-300"
                    placeholder="Pour your thoughts here... You can use markdown formatting"
                  />
                </div>

                {/* Publish Date & Image Upload Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Publish Date */}
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <Calendar size={18} />
                      Publish Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="publishedAt"
                        value={formData.publishedAt}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl 
                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                 transition-all duration-300
                                 hover:border-gray-300"
                      />
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <Upload size={18} />
                      Featured Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl 
                                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                 transition-all duration-300 file:mr-4 file:py-2 
                                 file:px-4 file:rounded-lg file:border-0 
                                 file:text-sm file:font-semibold file:bg-blue-50 
                                 file:text-blue-700 hover:file:bg-blue-100
                                 hover:border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Image Preview */}
                {imagePreview && (
                  <div className="relative mt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Preview:
                      </span>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                      >
                        <X size={16} />
                        Remove
                      </button>
                    </div>
                    <div className="relative rounded-xl overflow-hidden border-2 border-gray-200">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 
                             rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                             text-white font-semibold text-lg
                             shadow-lg hover:shadow-2xl
                             hover:from-blue-700 hover:to-indigo-700
                             active:scale-95 transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Publishing...
                      </>
                    ) : (
                      <>
                        <Sparkles size={20} />
                        Publish Blog
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="group flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 
                             rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 
                             text-gray-700 font-semibold text-lg
                             border-2 border-gray-300
                             hover:from-gray-200 hover:to-gray-300 hover:border-gray-400
                             hover:text-gray-900
                             active:scale-95 transition-all duration-300"
                  >
                    <X size={20} />
                    Clear All
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Preview & Tips */}
          <div className="space-y-6">
            {/* Preview Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800">
                  Live Preview
                </h3>
              </div>

              <div className="space-y-4">
                {/* Preview Image */}
                <div className="relative h-40 rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Upload size={32} />
                    </div>
                  )}
                </div>

                {/* Preview Content */}
                <div className="space-y-3">
                  {formData.title && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Title</div>
                      <div className="text-lg font-semibold text-gray-800 line-clamp-2">
                        {formData.title}
                      </div>
                    </div>
                  )}

                  {formData.category && (
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">Category:</div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {formData.category}
                      </span>
                    </div>
                  )}

                  {formData.shortDescription && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Summary</div>
                      <div className="text-sm text-gray-600 line-clamp-3">
                        {formData.shortDescription}
                      </div>
                    </div>
                  )}

                  {formData.author && (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                      <div className="text-sm text-gray-700">
                        {formData.author}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-blue-600" />
                Writing Tips
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">
                    Keep titles concise and compelling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">
                    Use high-quality images (1200x630px recommended)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">
                    Short description should hook readers in under 150
                    characters
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">
                    Break long paragraphs into digestible chunks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">
                    Add relevant tags/categories for better discoverability
                  </span>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Required Fields</span>
                    <span>
                      {
                        Object.values(formData).filter(
                          (val) => val.trim() !== '' && val !== 'Taskin'
                        ).length
                      }
                      /5
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
                      style={{
                        width: `${(Object.values(formData).filter((val) => val.trim() !== '' && val !== 'Taskin').length / 5) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">
                      {charCount.description}
                    </div>
                    <div className="text-xs text-gray-600">Words</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">
                      {charCount.shortDescription}/150
                    </div>
                    <div className="text-xs text-gray-600">Summary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
