import { Input, Form, message, Button } from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Rule } from "antd/es/form";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { FindUserModel } from "../../models/User";
import { useState } from "react";
import Loading from "../../components/Loading";
import './login.css';
import UserService from "../../services/User/UserService";
import { LoginUserInputModel } from "../../services/User/Models";
import { useNavigate } from "react-router-dom";

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

  const onFinish = async (values: FindUserModel) => {
    console.log(values);
    setLoading(true);
    const findUser: LoginUserInputModel = {
      email: values.email,
      password: values.password,
    };
    try {
      await UserService.login(findUser);
      message.success('Successfully registered');
      setTimeout(() => {
        setLoading(false);
        navigate("/site")
      }, 1500);
    }
     catch (error) {
      message.error('Not Found');
    }
    
  };
  const onFinishFailed = (error: ValidateErrorEntity<any>) => {
    console.log('error', message);
    // message.error(message)
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
      </div>
    </Form>
  );
};

export default Login;

