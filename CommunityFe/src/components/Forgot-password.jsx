import { Button, Space, Input } from "antd";

const forgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-header">
        <h3 className="title">Forgot Password?</h3>
        <p className="description">
          By entering your e-mail, you can create a new password from the e-mail
          you receive.
        </p>
      </div>
      <div className="forgot-body">
        <Input placeholder="E-mail" />
        <br />
        <br />
        <Space wrap>
          <Button type="primary">Send Mail</Button>
        </Space>
      </div>
    </div>
  );
};

export default forgotPassword;
