import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// ==========================================
// BASE QUERY
// ==========================================

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,

  prepareHeaders: (headers) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// ==========================================
// BLOG API
// ==========================================

export const blogApi = createApi({
  reducerPath: "blogApi",

  baseQuery,

  tagTypes: ["Blogs"],

  endpoints: (builder) => ({
    // ==========================================
    // ADMIN LOGIN
    // ==========================================

    loginAdmin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    // ==========================================
    // CREATE BLOG
    // ==========================================

    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Blogs"],
    }),

    // ==========================================
    // GET ALL BLOGS
    // ==========================================

    getBlogs: builder.query({
      query: () => "/blogs",

      providesTags: (result) => [
        {
          type: "Blogs",
          id: "LIST",
        },

        ...(result?.blogs || []).map((blog) => ({
          type: "Blogs",
          id: blog._id,
        })),
      ],
    }),

    // ==========================================
    // GET BLOG BY ID
    // ==========================================

    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,

      providesTags: (result, error, id) => [
        {
          type: "Blogs",
          id,
        },
      ],
    }),

    // ==========================================
    // GET BLOG BY SLUG
    // ==========================================

    getBlogBySlug: builder.query({
      query: (slug) => `/blogs/${slug}`,

      providesTags: (result) => {
        if (!result?.blog?._id) {
          return [];
        }

        return [
          {
            type: "Blogs",
            id: result.blog._id,
          },
        ];
      },
    }),

    // ==========================================
    // UPDATE BLOG
    // ==========================================

    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/blog/${id}`,
        method: "PUT",
        body: formData,
      }),

      invalidatesTags: (result, error, { id }) => [
        "Blogs",

        {
          type: "Blogs",
          id,
        },

        {
          type: "Blogs",
          id: "LIST",
        },
      ],
    }),

    // ==========================================
    // PUBLISH BLOG
    // ==========================================

    publishBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}/publish`,
        method: "PATCH",
      }),

      invalidatesTags: (result, error, id) => [
        "Blogs",

        {
          type: "Blogs",
          id,
        },

        {
          type: "Blogs",
          id: "LIST",
        },
      ],
    }),

    // ==========================================
    // GET PUBLISHED BLOGS
    // ==========================================

    getPublishedBlogs: builder.query({
      query: () => "/blogs/published",

      providesTags: ["Blogs"],
    }),

    // ==========================================
    // DELETE BLOG
    // ==========================================

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: (result, error, id) => [
        "Blogs",

        {
          type: "Blogs",
          id,
        },

        {
          type: "Blogs",
          id: "LIST",
        },
      ],
    }),
  }),
});

// ==========================================
// EXPORT HOOKS
// ==========================================

export const {
  useLoginAdminMutation,

  useAddBlogMutation,

  useGetBlogsQuery,

  usePublishBlogMutation,

  useGetPublishedBlogsQuery,

  useGetBlogBySlugQuery,

  useUpdateBlogMutation,

  useGetBlogByIdQuery,

  useDeleteBlogMutation,
} = blogApi;
