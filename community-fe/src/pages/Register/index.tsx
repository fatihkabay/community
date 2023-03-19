import { Input, Radio, DatePicker, Form, message, Button } from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Rule } from "antd/es/form";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { RegisterUserModel } from "../../models/User";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import './register.css';
import UserService from "../../services/User/UserService";
import { RegisterUserInputModel } from "../../services/User/Models";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/helpers";

const rules: { [key: string]: Rule[] } = {
  firstName: [
    { required: true },
    { type: "string", warningOnly: true },
    { type: "string", min: 2, max: 50 },
  ],
  lastName: [
    { required: true },
    { type: "string", warningOnly: true },
    { type: "string", min: 2, max: 50 },
  ],
  email: [
    { required: true },
    { type: "email", warningOnly: true },
    { type: "string", min: 8, max: 50 },
  ],
  password: [
    { required: true },
    { type: "string", warningOnly: true },
    { type: "string", min: 6, max: 30 },
  ],
  birthday: [
  { required: false },
  { type: "date", warningOnly: true },
  ],
  gender: [
    { required: false },
    { type: "string", warningOnly: true },
  ],
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = getUser();
  useEffect(() => {
     if (user == null) {
      navigate("/register")
    }
  }, );
  const onFinish = async (values: RegisterUserModel) => {
    setLoading(true);
    const newUser: RegisterUserInputModel = {
      name: values.firstName,
      lastname: values.lastName,
      email: values.email,
      password: values.password,
      birthday: dayjs(values.birthday).valueOf(),
      gender: values.gender,
    };
    
    try {
      await UserService.register(newUser);
      message.success('Successfully registered');
      setTimeout(() => {
        setLoading(false);
        navigate("/login")
      }, 1500);
    }
    catch (error) {
      message.error('Email is already registered');
      setLoading(false);
    }
  };

  const onFinishFailed = (error: ValidateErrorEntity<any>) => {
    console.error(error, message);
  };

  return (
    <Form
      className="register-page"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {loading && <Loading />}
      <div className="register-container">
        <Form.Item name="firstName" rules={rules.firstName} className="first-name">
          <Input
            prefix={<UserOutlined />}
            placeholder="First Name"
            type="text"
          />
        </Form.Item>
        <Form.Item name="lastName" rules={rules.lastName} className="last-name">
          <Input
            prefix={<UserOutlined />}
            placeholder="Last Name"
            type="text"
          />
        </Form.Item>
        <Form.Item name="email" rules={rules.email} className="email">
          <Input
            prefix={<MailOutlined />}
            placeholder="Email Address"
            type="text"
          />
        </Form.Item>
        <Form.Item name="password" rules={rules.password} className="password">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item name="birthday" rules={rules.birthday} className="datepicker">
          <DatePicker />
        </Form.Item>
        <Form.Item name="gender" className="gender">
          <Radio.Group id="gender" name="gender">
            <Radio value={"man"}>Man</Radio>
            <Radio value={"women"}>Women</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            Register
          </Button>
          <a href="/login">or login with a new account</a>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Register;