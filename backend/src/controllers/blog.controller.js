import Blog from '../models/Blog.model.js';

const createBlog = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      shortDescription,
      author,
      publishedAt,
    } = JSON.parse(req.body.data);

    const imgUrl = req.file ? req.file.path : null;

    const blog = await Blog.create({
      title,
      category,
      description,
      shortDescription,
      img: imgUrl,
      author,
      publishedAt,
    });

    res.status(201).json({
      success: true,
      message: 'BLOG CREATED SUCCESSFULLY',
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'ADDING BLOG FAILED',
      error: error.message,
    });
  }
};

const showAllBlogs = async (_, res) => {
  try {
    const blogList = await Blog.find().sort({ publishedAt: -1 });

    res.status(200).json({
      success: true,
      message: 'BLOG LIST FETCHED SUCCESSFULLY',
      blogs_count: blogList.length,
      data: blogList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FETCHING BLOG LIST FAILED',
      error: error.message,
    });
  }
};

const showSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({
      success: true,
      message: 'BLOG FETCHED SUCCESSFULLY',
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FETCHING BLOG FAILED',
      error: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    category,
    description,
    shortDescription,
    img,
    author,
    publishedAt,
  } = req.body;

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    {
      title,
      category,
      description,
      shortDescription,
      img,
      author,
      publishedAt,
    },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: 'BLOG UPDATED SUCCESSFULLY',
    data: updatedBlog,
  });
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'BLOG DELETED SUCCESSFULLY',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'DELETING BLOG FAILED',
      error: error.message,
    });
  }
};

const BlogController = {
  createBlog,
  showAllBlogs,
  showSingleBlog,
  updateBlog,
  deleteBlog,
};

export default BlogController;
