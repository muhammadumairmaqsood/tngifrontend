import React from "react";
import { Form, Input, Button, message } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    console.log("Category Data:", values);

    message.success("Category added successfully!");

    form.resetFields();

    navigate("/superadmin/categories/view");
  };

  const handleCancel = () => {
    form.resetFields();

    navigate("/superadmin/category/view");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Category</h1>

          <p className="text-sm text-gray-500 mt-1">
            Create a new blog category
          </p>
        </div>
      </div>

      {/* ================= FORM CARD ================= */}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* Category Name */}

          <Form.Item
            label="Category Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter category name",
              },
            ]}
          >
            <Input size="large" placeholder="Enter category name" />
          </Form.Item>

          {/* Description */}

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter category description",
              },
            ]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Enter category description"
              showCount
              maxLength={300}
            />
          </Form.Item>

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-5 border-t mt-6">
            <Button size="large" onClick={handleCancel}>
              Cancel
            </Button>

            <Button type="primary" size="large" htmlType="submit">
              Add Category
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddCategory;
