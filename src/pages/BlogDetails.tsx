import React from "react";
import { Layout } from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Spin, Empty } from "antd";
import { useGetBlogBySlugQuery } from "../redux/api.js";
const tags = [
  "React",
  "JavaScript",
  "Web Development",
  "Programming",
  "Frontend",
];
const BlogDetails = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGetBlogBySlugQuery(slug);
  const blog = data?.blog;
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spin size="large" />
      </div>
    );
  }
  if (isError || !blog) {
    return (
      <div className="max-w-5xl mx-auto py-20">
        <Empty description="Blog not found" />
      </div>
    );
  }
  return (
    <Layout>
      <div>
        <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto mt-10 mb-20">
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold my-4">
              {blog.title}
            </h1>

            {/* Image */}
            <div className="w-full aspect-[16/9] overflow-hidden">
              <img
                src={blog.featuredImage?.url}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="w-full my-6 text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              />

              {/* Tags */}
              <div className="my-6 flex gap-4 items-start">
                <h3 className="font-semibold">Tags:</h3>

                {blog.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
