import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { useGetPublishedBlogsQuery } from "../redux/api.js";
import { FiFileText } from "react-icons/fi";
const BlogPage = () => {
  const { data, isLoading } = useGetPublishedBlogsQuery();
  const blogs = data?.blogs ?? [];

  return (
    <Layout>
      <div className="w-full">
        <div className="w-full relative ">
          <div className="absolute bg-black/70 inset-0"></div>
          <img
            src="https://thumbs.dreamstime.com/b/banner-laptop-female-hands-copyspace-grey-color-background-concept-blog-heading-advertisement-business-school-126946751.jpg"
            className="w-full h-60 object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            Blog
          </h1>
        </div>
        {/* Blogs */}
        {blogs.length === 0 ? (
          <div className="min-h-[400px] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                <FiFileText className="text-3xl text-gray-400" />
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mt-5">
                No Blog Posts Yet
              </h2>

              <p className="text-gray-500 mt-2 leading-6">
                We don't have any blog posts available at the moment. Please
                check back soon for new articles and updates.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 my-6">
            {blogs.map((item) => (
              <div className="p-2 shadow">
                {/* Image */}
                <div>
                  <img src={item.featuredImage?.url} alt={item.title} />
                </div>
                {/* content */}
                <div className="p-4">
                  <Link to={`/blog/${item.slug}`}>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </Link>
                  <p className="text-gray-600 mt-2">{item.seoDescription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
