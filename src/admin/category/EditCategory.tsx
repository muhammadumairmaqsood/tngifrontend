import { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  // URL se category ID
  const { id } = useParams<{ id: string }>();

  // ================= FETCH CATEGORY =================

  useEffect(() => {
    if (!id) return;

    // Abhi dummy data
    const category = {
      name: "Web Development",
      description:
        "Articles related to web development and modern web technologies.",
    };

    // Existing data form mein fill
    form.setFieldsValue({
      name: category.name,
      description: category.description,
    });

    // API ke saath baad mein:
    //
    // getCategoryById(id).then((response) => {
    //   form.setFieldsValue(response.data);
    // });
  }, [id, form]);

  // ================= UPDATE =================

  const handleSubmit = (values: any) => {
    console.log("Category ID:", id);
    console.log("Updated Category:", values);

    // Yahan update API call hogi
    //
    // updateCategory(id, values);

    message.success("Category updated successfully!");

    navigate("/superadmin/categories/view");
  };

  // ================= CANCEL =================

  const handleCancel = () => {
    form.resetFields();

    navigate("/superadmin/category/view");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Edit Category</h1>

          <p className="text-sm text-gray-500 mt-1">
            Update your blog category
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
              rows={6}
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
              Update Category
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditCategory;
