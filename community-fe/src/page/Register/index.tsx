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
import { CreateUserModel } from "../../models/User";
import { useState } from "react";
import Loading from "../../components/Loading";
import './Register.css';
import UserService from "../../services/User/UserService";
import { RegisterUserInputModel } from "../../services/User/Models";
import dayjs from "dayjs";

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


const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: CreateUserModel) => {
    console.log(values);
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
    } catch (err) {
      message.error('Error');
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (error: ValidateErrorEntity<any>) => {
    console.log('error', message);
    // message.error(message)
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
        </Form.Item>
      </div>
    </Form>
  );
};

export default Login;
