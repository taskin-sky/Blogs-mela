import { model, Schema } from 'mongoose';

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
    },
    img: {
      type: String,
    },
    author: {
      type: String,
      default: 'Admin',
    },
    publishedAt: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Blog = model('Blog', blogSchema);

export default Blog;
