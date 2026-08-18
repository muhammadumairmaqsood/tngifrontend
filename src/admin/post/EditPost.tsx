import { Form, Input, Select, Upload, Button, message, Spin } from "antd";

import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { useNavigate, useParams } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useEffect, useState } from "react";

import { useGetBlogByIdQuery, useUpdateBlogMutation } from "../../redux/api.js";

const { TextArea } = Input;

const EditPost = () => {
  const { id } = useParams();

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [fileList, setFileList] = useState([]);

  // ==========================================
  // GET BLOG
  // ==========================================

  const { data, isLoading, isError } = useGetBlogByIdQuery(id);

  const blog = data?.blog;

  // ==========================================
  // UPDATE BLOG
  // ==========================================

  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();

  // ==========================================
  // QUILL CONFIG
  // ==========================================

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

  // ==========================================
  // LOAD BLOG
  // ==========================================

  useEffect(() => {
    if (!blog) return;

    console.log("BLOG FROM API:", blog);

    // ========================================
    // SET FORM
    // ========================================

    form.setFieldsValue({
      title: blog.title || "",

      category: blog.category || "",

      author: blog.author || "",

      tags: Array.isArray(blog.tags) ? blog.tags : [],

      content: blog.content || "",

      seoTitle: blog.seoTitle || "",

      seoDescription: blog.seoDescription || "",

      seoKeywords: Array.isArray(blog.seoKeywords) ? blog.seoKeywords : [],
    });

    // ========================================
    // SET IMAGE
    // ========================================

    if (blog.featuredImage?.url) {
      setFileList([
        {
          uid: "-1",

          name: "featured-image.jpg",

          status: "done",

          url: blog.featuredImage.url,
        },
      ]);
    } else {
      setFileList([]);
    }
  }, [blog, form]);

  // ==========================================
  // IMAGE CHANGE
  // ==========================================

  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async (values) => {
    try {
      console.log("FORM VALUES:", values);

      // ======================================
      // CREATE FORMDATA
      // ======================================

      const formData = new FormData();

      // ======================================
      // BASIC FIELDS
      // ======================================

      formData.append("title", values.title || "");

      formData.append("slug", blog.slug || "");

      formData.append("category", values.category || "");

      formData.append("author", values.author || "");

      formData.append("status", blog.status || "draft");

      // ======================================
      // CONTENT
      // ======================================

      formData.append("content", values.content || "");

      // ======================================
      // TAGS
      // ======================================

      if (Array.isArray(values.tags)) {
        values.tags.forEach((tag) => {
          formData.append("tags", tag);
        });
      }

      // ======================================
      // SEO TITLE
      // ======================================

      formData.append("seoTitle", values.seoTitle || "");

      // ======================================
      // SEO DESCRIPTION
      // ======================================

      formData.append("seoDescription", values.seoDescription || "");

      // ======================================
      // SEO KEYWORDS
      // ======================================

      if (Array.isArray(values.seoKeywords)) {
        values.seoKeywords.forEach((keyword) => {
          formData.append("seoKeywords", keyword);
        });
      }

      // ======================================
      // IMAGE
      // ======================================

      const newImage = fileList?.[0]?.originFileObj;

      if (newImage) {
        formData.append("featuredImage", newImage);

        console.log("NEW IMAGE:", newImage.name);
      } else {
        console.log("OLD IMAGE REMAIN");
      }

      // ======================================
      // DEBUG FORMDATA
      // ======================================

      console.log("========== FORMDATA ==========");

      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }

      // ======================================
      // UPDATE API
      // ======================================

      const response = await updateBlog({
        id,
        formData,
      }).unwrap();

      console.log("UPDATE RESPONSE:", response);

      message.success("Blog updated successfully!");

      navigate("/superadmin/blogs/view");
    } catch (error) {
      console.log("UPDATE ERROR:", error);

      message.error(error?.data?.message || "Failed to update blog");
    }
  };

  // ==========================================
  // CANCEL
  // ==========================================

  const handleCancel = () => {
    form.resetFields();

    navigate("/superadmin/blogs/view");
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spin size="large" />
      </div>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (isError || !blog) {
    return (
      <div className="max-w-5xl mx-auto py-10">
        <h2 className="text-xl font-semibold text-red-500">
          Failed to load blog
        </h2>
      </div>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="max-w-5xl mx-auto">
      {/* ======================================
          HEADER
      ====================================== */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Edit Blog</h1>

          <p className="text-sm text-gray-500 mt-1">
            Update changes to your blog post
          </p>
        </div>

        <Button icon={<ArrowLeftOutlined />} onClick={handleCancel}>
          Back
        </Button>
      </div>

      {/* ======================================
          FORM
      ====================================== */}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* ==================================
              TITLE
          ================================== */}

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

          {/* ==================================
              IMAGE
          ================================== */}

          <Form.Item label="Featured Image">
            <Upload
              listType="picture-card"
              maxCount={1}
              accept="image/*"
              beforeUpload={() => false}
              fileList={fileList}
              onChange={handleImageChange}
            >
              {fileList.length >= 1 ? null : (
                <div>
                  <PlusOutlined className="text-xl" />

                  <div className="mt-2">Change Image</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          {/* ==================================
              CATEGORY + AUTHOR
          ================================== */}

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please enter category",
                },
              ]}
            >
              <Input size="large" placeholder="Enter blog category" />
            </Form.Item>

            <Form.Item
              label="Author Name"
              name="author"
              rules={[
                {
                  required: true,
                  message: "Please enter author name",
                },
              ]}
            >
              <Input size="large" placeholder="Enter author name" />
            </Form.Item>
          </div>

          {/* ==================================
              TAGS
          ================================== */}

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

          {/* ==================================
              CONTENT
          ================================== */}

          <Form.Item
            label="Blog Content"
            name="content"
            rules={[
              {
                required: true,
                message: "Please write blog content",
              },
            ]}
          >
            <ReactQuill
              theme="snow"
              modules={quillModules}
              formats={quillFormats}
              placeholder="Write blog content here..."
              className="blog-editor"
            />
          </Form.Item>

          {/* ==================================
              SEO
          ================================== */}

          <span className="text-sm font-bold inline-block py-3">
            SEO Settings
          </span>

          <Form.Item label="SEO Title" name="seoTitle">
            <Input
              size="large"
              placeholder="Enter SEO title"
              showCount
              maxLength={60}
            />
          </Form.Item>

          <Form.Item label="SEO Description" name="seoDescription">
            <TextArea
              rows={4}
              placeholder="Write a short SEO description..."
              showCount
              maxLength={160}
            />
          </Form.Item>

          <Form.Item label="SEO Keywords" name="seoKeywords">
            <Select
              mode="tags"
              size="large"
              placeholder="Add SEO keywords"
              tokenSeparators={[","]}
            />
          </Form.Item>

          {/* ==================================
              STATUS
          ================================== */}

          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Current Status:</span>

            <span
              className={`ml-2 font-semibold ${
                blog.status === "published"
                  ? "text-green-600"
                  : "text-orange-500"
              }`}
            >
              {blog.status}
            </span>
          </div>

          {/* ==================================
              BUTTONS
          ================================== */}

          <div className="flex justify-end gap-3 pt-5 border-t mt-6">
            <Button size="large" onClick={handleCancel}>
              Cancel
            </Button>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={isUpdating}
            >
              Update Blog
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditPost;
