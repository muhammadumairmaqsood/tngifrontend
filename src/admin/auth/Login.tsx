import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useLoginAdminMutation } from "../../redux/api.js";

const Login = () => {
  const navigate = useNavigate();

  const [loginAdmin, { isLoading }] = useLoginAdminMutation();

  const handleLogin = async (values) => {
    try {
      const response = await loginAdmin(values).unwrap();

      console.log("LOGIN RESPONSE:", response);

      // ==========================================
      // SAVE TOKEN
      // ==========================================

      localStorage.setItem("adminToken", response.token);

      // ==========================================
      // SAVE ADMIN
      // ==========================================

      localStorage.setItem("admin", JSON.stringify(response.admin));

      message.success("Login successful!");

      navigate("/superadmin");
    } catch (error) {
      console.log("LOGIN ERROR:", error);

      message.error(error?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        {/* Header */}

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>

          <p className="text-gray-500 mt-2">Login to access admin dashboard</p>
        </div>

        {/* Form */}

        <Form layout="vertical" onFinish={handleLogin}>
          {/* Email */}

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              {
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input size="large" placeholder="Enter admin email" />
          </Form.Item>

          {/* Password */}

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password size="large" placeholder="Enter password" />
          </Form.Item>

          {/* Login */}

          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={isLoading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
