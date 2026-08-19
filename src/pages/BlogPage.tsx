import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { useGetPublishedBlogsQuery } from "../redux/api.js";
import { FiFileText } from "react-icons/fi";
import { Card, Pagination } from "antd";

const { Meta } = Card;

const BlogPage = () => {
  const { data, isLoading } = useGetPublishedBlogsQuery();

  const blogs = data?.blogs ?? [];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentBlogs = blogs.slice(startIndex, startIndex + postsPerPage);

  return (
    <Layout>
      <div className="w-full">
        {/* ================= Banner ================= */}
        <div className="w-full relative">
          <div className="absolute bg-black/70 inset-0"></div>

          <img
            src="https://thumbs.dreamstime.com/b/banner-laptop-female-hands-copyspace-grey-color-background-concept-blog-heading-advertisement-business-school-126946751.jpg"
            className="w-full object-cover"
            alt="Blog Banner"
          />

          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            Blog
          </h1>
        </div>

        {/* ================= Blogs ================= */}
        {isLoading ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <p>Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
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
          <>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 w-full md:w-[90%]  py-11">
              {currentBlogs.map((item) => (
                <Link
                  key={item._id}
                  to={`/blog/${item.slug}`}
                  className="rounded-2xl  bg-white w-[86%] md:w-[300px]  shadow-xl"
                >
                  <div className="aspect-w-3 aspec-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
                    <img
                      src={item.featuredImage?.url}
                      alt={item.title}
                      className="object-cover h-70"
                    />
                  </div>

                  <div className="px-3">
                    <h2 className="text-[17px] font-semibold mt-3 mb-1">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-[12px] line-clamp-3 mb-3">
                      {item.seoDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* ================= Pagination ================= */}
            {totalPages > 1 && (
              <div className="flex justify-center my-8">
                <Pagination
                  current={currentPage}
                  total={blogs.length}
                  pageSize={postsPerPage}
                  showSizeChanger={false}
                  onChange={(page) => {
                    setCurrentPage(page);

                    // Page change par top par le jana
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
