import React, { useState } from 'react';
import { createBlogAPI } from '../lib/api/blog.api';

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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = new FormData();

      // Create JSON string
      const blogData = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        shortDescription: formData.shortDescription,
        author: formData.author,
        publishedAt: formData.publishedAt,
      };

      // console.log('Blog data object:', blogData);
      // console.log('Blog data stringified:', JSON.stringify(blogData));

      submitData.append('data', JSON.stringify(blogData));

      if (image) {
        submitData.append('img', image);
      }

      // Log all FormData entries
      // console.log('FormData entries:');
      // for (let pair of submitData.entries()) {
      //   console.log(`${pair[0]}: ${pair[1]}`);
      // }

      // console.log('Sending request to backend...');
      await createBlogAPI({ data: submitData });

      alert('Blog created successfully!');
      resetForm();
    } catch (error) {
      console.error('Full error:', error);
      console.error('Error response:', error.response?.data);
      alert(
        error.response?.data?.message ||
          error.message ||
          'Failed to create blog'
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
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Blog title"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category *</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Technology, Lifestyle, etc."
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-medium">Short Description *</label>
          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            required
            rows="2"
            className="w-full p-2 border rounded"
            placeholder="Brief summary"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block mb-1 font-medium">Full Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full p-2 border rounded"
            placeholder="Blog content"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Author name"
          />
        </div>

        {/* Publish Date */}
        <div>
          <label className="block mb-1 font-medium">Publish Date</label>
          <input
            type="date"
            name="publishedAt"
            value={formData.publishedAt}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Blog Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {image && (
            <p className="mt-1 text-sm text-gray-600">Selected: {image.name}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Creating...' : 'Create Blog'}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
