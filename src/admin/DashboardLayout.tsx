import { useState } from "react";

import {
  PieChartOutlined,
  FileTextOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  TagsOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/tng-logo.png";

const { Content, Sider } = Layout;

function getItem(
  label: string,
  key: string,
  icon?: React.ReactNode,
  children?: any[],
) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "/superadmin/dashboard", <PieChartOutlined />),

  getItem("Blog", "blog", <FileTextOutlined />, [
    getItem("Add Blog", "/superadmin/blogs/add", <PlusOutlined />),

    getItem("View Blogs", "/superadmin/blogs/view", <UnorderedListOutlined />),
  ]),

  getItem("Category", "category", <TagsOutlined />, [
    getItem("Add Category", "/superadmin/category/add", <PlusOutlined />),

    getItem(
      "View Categories",
      "/superadmin/category/view",
      <UnorderedListOutlined />,
    ),
  ]),
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // 👇 Open dropdowns ko state mein rakhenge
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const navigate = useNavigate();

  const location = useLocation();

  // ================= MENU CLICK =================

  const handleMenuClick = ({ key }: { key: string }) => {
    // Parent dropdown ko navigate nahi karna
    if (key !== "blog" && key !== "category") {
      navigate(key);
    }
  };

  // ================= DROPDOWN OPEN =================

  const handleOpenChange = (keys: string[]) => {
    // Jo latest dropdown open hua hai
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));

    // Sirf Blog aur Category ko dropdown treat karna
    if (latestOpenKey === "blog" || latestOpenKey === "category") {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    } else {
      setOpenKeys(keys);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* ================= SIDEBAR ================= */}

      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={200}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
          overflow: "auto",
          background: "#fff",
        }}
      >
        {/* ================= LOGO ================= */}

        <div className="h-20 flex items-center justify-center border-b border-gray-200 mb-2 bg-white">
          <img
            src={logo}
            alt="TNG Logo"
            className={`
              object-contain
              transition-all
              duration-200
              ${collapsed ? "w-12" : "w-32"}
            `}
          />
        </div>

        {/* ================= MENU ================= */}

        <Menu
          theme="light"
          mode="inline"
          // Current URL ke according selected menu
          selectedKeys={[location.pathname]}
          // Dropdown state
          openKeys={openKeys}
          // Dropdown open/close
          onOpenChange={handleOpenChange}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>

      {/* ================= MAIN LAYOUT ================= */}

      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: "all 0.2s",
        }}
      >
        <Content
          style={{
            margin: "24px 16px",
            minHeight: "calc(100vh - 48px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
