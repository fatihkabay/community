import "./forgot-psw.css";
import { Input, Form, message, Button } from "antd";
import { Rule } from "antd/es/form";
import { useState } from "react";
import { ForgotPswInputModel } from "../../services/User/Models";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const rules: { [key: string]: Rule[] } = {

  email: [
    { required: true },
    { type: "email", warningOnly: true },
    { type: "string", min: 8, max: 50 },
  ],
  };

const ForgotPswPage = () => {
 const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onGetFinish = async (FpswInfo: ForgotPswInputModel) => {
    setLoading(true);
    const resetPsw: ForgotPswInputModel = {
      email: FpswInfo.email,
    };
    setLoading(false);
    }
   const onFinishFailed = (error: ValidateErrorEntity<any>) => {
      console.error(error, message);
    }

return(
    <Form className="home-page"
        onFinish={onGetFinish}
        onFinishFailed={onFinishFailed}
    >
      {loading && <Loading />}
      <h3>Forgot Password</h3>
      <Form.Item name="Email" rules={rules.email} className="Email">
        <Input
          placeholder="Email"
          type="text"
        />
      </Form.Item>
      <div className="Fpsw-buttons">
      <Button onClick={() => {
      <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a>
          message.success("Send mail")
    }} 
      htmlType="submit">Send Mail</Button>
      <Button onClick={() => {
        navigate("/login")
      }}>Login Page</Button>
      </div>
    </Form>
  )
};
export default ForgotPswPage;
