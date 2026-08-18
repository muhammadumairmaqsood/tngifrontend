import { Table, Tooltip, Image, message, Popconfirm, Skeleton } from "antd";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TbWorldUpload } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import {
  useGetBlogsQuery,
  usePublishBlogMutation,
  useDeleteBlogMutation,
} from "../../redux/api.js";

const Blogs = () => {
  const { data, isLoading, error } = useGetBlogsQuery();

  const [publishBlog, { isLoading: isPublishing }] = usePublishBlogMutation();

  const [deleteBlog, { isLoading: isDeleting }] = useDeleteBlogMutation();

  const navigate = useNavigate();

  const blogs = data?.blogs ?? [];

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
      </div>

      {/* Table */}

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={blogs}
        pagination={{
          pageSize: 5,
        }}
      />
    </div>
  );
};

export default Blogs;
