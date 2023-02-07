import { Input, Form, message, Button } from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Rule } from "antd/es/form";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { LoginUserModel } from "../../models/User";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import './login.css';
import UserService from "../../services/User/UserService";
import { useNavigate } from "react-router-dom";
import { LoginUserInputModel } from "../../services/User/Models";
import { getUser, setUser } from "../../utils/helpers";

const rules: { [key: string]: Rule[] } = {

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
};

const Login = () => {
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
      useEffect(() => {
         const user = getUser();
         if (user != null) {
          
          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 1500)
        }
      }, );

  const onFinish = async (values: LoginUserModel) => {
    setLoading(true);
    const findUser: LoginUserInputModel = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await UserService.login(findUser);
      setUser(res);
      message.success('Successfully login');
      setTimeout(() => {
        setLoading(false);
        navigate("/")
      }, 1500);
    }
     catch (error) {
      message.error('Not Found');
    }
    
  };
  const onFinishFailed = (error: ValidateErrorEntity<any>) => {
    console.error('error', message);
     message.error("error")
  };

  return (
    <Form
      className="login-page"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {loading && <Loading />}
      <div className="login-container">
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
          <Button htmlType="submit">
            Login
          </Button>
          <a href="/register"> or Create a new account</a>
      </div>
    </Form>
  );
};
export default Login;

