import { Button, Table, Popconfirm, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ViewCategory = () => {
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/superadmin/category/edit/${id}`);
    console.log(id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete Category ID:", id);

    // Yahan delete API call karenge
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Actions",
      key: "actions",
      width: 120,

      render: (_: any, record: any) => (
        <div className="flex items-center gap-3">
          {/* Edit */}

          <Tooltip title="Edit Category">
            <Button
              type="text"
              icon={<EditOutlined />}
              className="text-lg"
              onClick={() => handleEdit(record.key)}
            />
          </Tooltip>

          {/* Delete */}

          <Tooltip title="Delete Category">
            <Popconfirm
              title="Delete this category?"
              description="This action cannot be undone."
              okText="Delete"
              cancelText="Cancel"
              onConfirm={() => handleDelete(record.key)}
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                className="text-lg"
              />
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      name: "Web Development",
      description:
        "Articles related to web development and modern web technologies.",
    },

    {
      key: 2,
      name: "JavaScript",
      description: "JavaScript tutorials, tips, tricks and best practices.",
    },

    {
      key: 3,
      name: "React JS",
      description: "React JS tutorials and frontend development resources.",
    },

    {
      key: 4,
      name: "Technology",
      description: "Latest technology news, trends and useful information.",
    },
  ];

  return (
    <div>
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Categories</h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your blog categories
          </p>
        </div>
      </div>

      {/* ================= TABLE ================= */}

      <div className="bg-white rounded-lg shadow-sm">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 8,
          }}
          scroll={{
            x: "max-content",
          }}
        />
      </div>
    </div>
  );
};

export default ViewCategory;
