import { useQuery } from '@tanstack/react-query';
import { getAllBlogsAPI } from '../lib/api/blog.api';
import { BlogCardLoading } from '../components/Blog/BlogCardLoading';
import { BlogCard } from '../components/Blog/BlogCard';

const BlogsPage = () => {
  const { data: blogs, isLoading } = useQuery({
    queries: ['blogs'],
    queryFn: getAllBlogsAPI,
  });

  if (isLoading) {
    return <BlogCardLoading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        ✍️ All Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
