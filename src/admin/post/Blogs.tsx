import {
  Table,
  Tooltip,
  Image,
  message,
  Popconfirm,
  Skeleton,
  Input,
  Select,
} from "antd";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TbWorldUpload } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import {
  useGetBlogsQuery,
  usePublishBlogMutation,
  useDeleteBlogMutation,
} from "../../redux/api.js";
import { useState } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { data, isLoading, error } = useGetBlogsQuery();

  const [publishBlog, { isLoading: isPublishing }] = usePublishBlogMutation();

  const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();

  const navigate = useNavigate();

  const blogs = data?.blogs ?? [];
  // ==========================================
  // FILTER BLOG
  // ==========================================
  const filteredBlogs = blogs?.filter((blog) => {
    const searchMatch = blog.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const statusMatch = statusFilter === "all" || blog.status === statusFilter;

    return searchMatch && statusMatch;
  });

  // ==========================================
  // PUBLISH BLOG
  // ==========================================

  const handlePublish = async (id) => {
    try {
      await publishBlog(id).unwrap();

      message.success("Blog published successfully!");
    } catch (error) {
      console.log("Publish Error:", error);

      message.error(error?.data?.message || "Failed to publish blog");
    }
  };

  // ==========================================
  // DELETE BLOG
  // ==========================================

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id).unwrap();

      message.success("Blog deleted successfully!");
    } catch (error) {
      console.log("DELETE ERROR:", error);

      message.error(error?.data?.message || "Failed to delete blog");
    }
  };

  // ==========================================
  // TABLE COLUMNS
  // ==========================================

  const columns = [
    // ========================================
    // FEATURED IMAGE
    // ========================================

    {
      title: "Featured Image",
      dataIndex: "featuredImage",
      key: "featuredImage",

      render: (image) => {
        const imageUrl = typeof image === "string" ? image : image?.url;

        return (
          <Image
            src={imageUrl}
            width={70}
            height={45}
            className="rounded-md object-cover"
            preview
          />
        );
      },
    },

    // ========================================
    // TITLE
    // ========================================

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    // ========================================
    // CATEGORY
    // ========================================

    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },

    // ========================================
    // ACTIONS
    // ========================================

    {
      title: "Actions",
      key: "actions",

      render: (_, record) => (
        <div className="flex items-center gap-3">
          {/* EDIT */}

          <Tooltip title="Edit Blog">
            <button
              className="text-lg cursor-pointer"
              onClick={() => navigate(`/superadmin/blogs/edit/${record._id}`)}
            >
              <FiEdit />
            </button>
          </Tooltip>

          {/* PUBLISH */}

          <Tooltip
            title={
              record.status === "published"
                ? "Already Published"
                : "Publish Blog"
            }
          >
            <button
              disabled={record.status === "published" || isPublishing}
              className={`text-lg ${
                record.status === "published"
                  ? "text-green-500 cursor-not-allowed"
                  : "text-blue-600 cursor-pointer"
              }`}
              onClick={() => handlePublish(record._id)}
            >
              <TbWorldUpload />
            </button>
          </Tooltip>

          {/* DELETE */}

          <Popconfirm
            title="Delete this blog?"
            description="Are you sure you want to delete this blog?"
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              danger: true,
              loading: isDeleting,
            }}
            onConfirm={() => handleDelete(record._id)}
          >
            <Tooltip title="Delete Blog">
              <button className="text-lg text-red-500 cursor-pointer">
                <FiTrash2 />
              </button>
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];

  // ==========================================
  // LOADING
  // ==========================================

  if (isLoading) {
    return <Skeleton active />;
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error) {
    return <div className="text-red-500">Failed to load blogs</div>;
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between py-3 px-2">
        <h1 className="text-2xl font-bold">Blogs Details</h1>
        <div className="flex items-center gap-4 mb-5">
          <Input
            placeholder="Search blogs by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[300px]"
          />

          <Select
            value={statusFilter}
            onChange={setStatusFilter}
            className="w-[180px]"
            options={[
              {
                value: "all",
                label: "All Posts",
              },
              {
                value: "published",
                label: "Posted",
              },
              {
                value: "draft",
                label: "Unposted",
              },
            ]}
          />
        </div>
      </div>

      {/* Table */}

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={filteredBlogs}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default Blogs;
