import React from "react";
import "./components.css";
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined, } from "@ant-design/icons";
import { Button, Form, Input, Checkbox, Space } from "antd";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h3 className="title">Login</h3>
        <p className="description">
          You can benefit from our service by logging in below.
        </p>
      </div>
      <div className="login-body">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="E-mail"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Space direction="vertical">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/forgot-password">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item className="login-button-and-description">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
