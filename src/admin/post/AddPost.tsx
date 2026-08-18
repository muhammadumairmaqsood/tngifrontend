import React from "react";
import { Form, Input, Select, Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useAddBlogMutation } from "../../redux/api.js";

const { TextArea } = Input;

const AddPost = () => {
  const [addBlog, { isLoading }] = useAddBlogMutation();

  const [form] = Form.useForm();

  const navigate = useNavigate();

  // =========================
  // ReactQuill Toolbar
  // =========================

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],

      ["bold", "italic", "underline", "strike"],

      [{ list: "ordered" }, { list: "bullet" }],

      [{ align: [] }],

      ["blockquote", "code-block"],

      ["link", "image"],

      ["clean"],
    ],
  };

  // =========================
  // ReactQuill Formats
  // =========================

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  // =========================
  // Slug Generator
  // =========================

  const generateSlug = (title) => {
    return title
      ?.toString()
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  };

  // =========================
  // Submit
  // =========================

  const handleSubmit = async (values) => {
    try {
      // -------------------------
      // Create FormData
      // -------------------------

      const formData = new FormData();

      // -------------------------
      // Basic Blog Information
      // -------------------------

      formData.append("title", values.title);

      formData.append("slug", generateSlug(values.title));

      formData.append("category", values.category);

      formData.append("author", values.author || "Umair");

      // -------------------------
      // Tags
      // -------------------------

      if (values.tags?.length) {
        values.tags.forEach((tag) => {
          formData.append("tags", tag);
        });
      }

      // -------------------------
      // Rich Text Content
      // -------------------------

      formData.append("content", values.content);

      // -------------------------
      // Blog Status
      // -------------------------

      formData.append("status", "draft");

      // -------------------------
      // SEO
      // -------------------------

      formData.append("seoTitle", values.seoTitle || "");

      formData.append("seoDescription", values.seoDescription || "");

      // -------------------------
      // SEO Keywords
      // -------------------------

      if (values.seoKeywords?.length) {
        values.seoKeywords.forEach((keyword) => {
          formData.append("seoKeywords", keyword);
        });
      }

      // -------------------------
      // Featured Image
      // -------------------------

      const imageFile = values.featuredImage?.[0]?.originFileObj;

      if (imageFile) {
        formData.append("featuredImage", imageFile);
      }

      // -------------------------
      // Debug
      // -------------------------

      console.log("Form Data:", [...formData.entries()]);

      // -------------------------
      // API Call
      // -------------------------

      await addBlog(formData).unwrap();

      // -------------------------
      // Success
      // -------------------------

      message.success("Blog saved successfully!");

      form.resetFields();

      navigate("/superadmin/blogs/view");
    } catch (error) {
      console.log("Add Blog Error:", error);

      message.error(error?.data?.message || "Failed to save blog");
    }
  };

  // =========================
  // Cancel
  // =========================

  const handleCancel = () => {
    form.resetFields();

    navigate("/superadmin/blogs/view");
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Blog</h1>

          <p className="text-sm text-gray-500 mt-1">Create a new blog post</p>
        </div>
      </div>

      {/* ================= FORM CARD ================= */}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* ================= BLOG INFORMATION ================= */}

          <span className="text-sm font-bold py-4 inline-block">
            Blog Information
          </span>

          {/* ================= TITLE ================= */}

          <Form.Item
            label="Blog Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter blog title",
              },
            ]}
          >
            <Input size="large" placeholder="Enter blog title" />
          </Form.Item>

          {/* ================= FEATURED IMAGE ================= */}

          <Form.Item
            label="Featured Image"
            name="featuredImage"
            valuePropName="fileList"
            getValueFromEvent={(e) => e?.fileList}
            rules={[
              {
                required: true,
                message: "Please upload featured image",
              },
            ]}
          >
            <Upload
              listType="picture-card"
              maxCount={1}
              accept="image/*"
              beforeUpload={() => false}
            >
              <div>
                <PlusOutlined className="text-xl" />

                <div className="mt-2">Upload</div>
              </div>
            </Upload>
          </Form.Item>

          {/* ================= CATEGORY ================= */}

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please enter blog category",
              },
            ]}
          >
            <Input size="large" placeholder="Enter blog category" />
          </Form.Item>

          {/* ================= AUTHOR ================= */}

          <Form.Item label="Author Name" name="author">
            <Input size="large" placeholder="Enter author name" />
          </Form.Item>

          {/* ================= TAGS ================= */}

          <Form.Item
            label="Tags"
            name="tags"
            rules={[
              {
                required: true,
                message: "Please add at least one tag",
              },
            ]}
          >
            <Select
              mode="tags"
              size="large"
              placeholder="Add blog tags"
              tokenSeparators={[","]}
            />
          </Form.Item>

          {/* ================= RICH TEXT EDITOR ================= */}

          <Form.Item
            label="Blog Content"
            name="content"
            rules={[
              {
                validator: (_, value) => {
                  if (
                    !value ||
                    value === "<p><br></p>" ||
                    value.trim() === ""
                  ) {
                    return Promise.reject(
                      new Error("Please write blog content"),
                    );
                  }

                  return Promise.resolve();
                },
              },
            ]}
          >
            <ReactQuill
              theme="snow"
              modules={quillModules}
              formats={quillFormats}
              placeholder="Write your blog content here..."
              className="blog-editor"
            />
          </Form.Item>

          {/* ================= SEO ================= */}

          <span className="text-sm font-bold inline-block py-3">
            SEO Settings
          </span>

          {/* ================= SEO TITLE ================= */}

          <Form.Item label="SEO Title" name="seoTitle">
            <Input
              size="large"
              placeholder="Enter SEO title"
              showCount
              maxLength={60}
            />
          </Form.Item>

          {/* ================= SEO DESCRIPTION ================= */}

          <Form.Item label="SEO Description" name="seoDescription">
            <TextArea
              rows={4}
              placeholder="Write a short SEO description..."
              showCount
              maxLength={160}
            />
          </Form.Item>

          {/* ================= SEO KEYWORDS ================= */}

          <Form.Item label="SEO Keywords" name="seoKeywords">
            <Select
              mode="tags"
              size="large"
              placeholder="Add SEO keywords"
              tokenSeparators={[","]}
            />
          </Form.Item>

          {/* ================= BUTTONS ================= */}

          <div className="flex justify-end gap-3 pt-5 border-t mt-6">
            <Button size="large" onClick={handleCancel} disabled={isLoading}>
              Cancel
            </Button>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={isLoading}
            >
              Save Blog
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddPost;
