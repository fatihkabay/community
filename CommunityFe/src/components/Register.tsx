import React, { useState } from "react";
import "./components.css";
import { Button, DatePicker, Radio, Space, Input } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import CommunityService from "../services/CommunityService";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onRegister = async () => {
    setLoading(true);
    await CommunityService.register;
    setLoading(false);
  }
  
  return (
    <div className="register-container">
      <div className="register-header">
        <h3 className="title">Register</h3>
        <p className="description">
          You can benefit from our service by registering below.
        </p>
      </div>
      <div className="register-body">
        <Input prefix={<UserOutlined />} placeholder="First Name" />
        <Input prefix={<UserOutlined />} placeholder="Last Name" />
        <Input placeholder="E-mail Adress" prefix={<MailOutlined />} />
        <Space direction="vertical">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>
        <Space direction="vertical">
          <DatePicker placeholder="Birthday" onChange={onChange} />
        </Space>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>Man</Radio>
          <Radio value={2}>Women</Radio>
        </Radio.Group>
        <Space wrap>
          <Button onClick={onRegister} type="primary">Register</Button>or <a href="/login">Already have an account? Login!</a>
        </Space>
      </div>
    </div>
  );
};
export default Register;
