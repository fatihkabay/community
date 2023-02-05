import { useEffect } from "react";
import { getUser } from "../../utils/helpers";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Input, Form, Button } from "antd";
import { Rule } from "antd/es/form";

const Home = () => {
  const user = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }
  }, );

  if (user == null) return <></>;
  const rules: { [key: string]: Rule[] } = {

    brand: [
      { required: true },
      { type: "string", warningOnly: true },
      { type: "string", min: 3, max: 50 },
    ],
    model: [
      { required: true },
      { type: "string", warningOnly: true },
      { type: "string", min: 2, max: 50 },
    ],
    year: [
      { required: true },
      { type: "number", warningOnly: true },
      {  min: 4, max:4},
    ],
    kilometer: [
      { required: false },
      { type: "number", warningOnly: true },
    ]
  };
    return (
      <Form className="home-page">
        <Form.Item name="Brand" rules={rules.brand} className="brans">
          <Input
            placeholder="Brand"
            type="text"
          />
        </Form.Item>
        <Form.Item name="Model" rules={rules.model} className="Model">
          <Input
            placeholder="Model"
            type="text"
          />
        </Form.Item>
        <Form.Item name="Year" rules={rules.year} className="Year">
          <Input
            placeholder="Year"
            type="text"
          />
        </Form.Item>
        <Form.Item name="Kilometer" rules={rules.kilometer} className="Kilometer">
          <Input
            placeholder="Kilometer"
            type="text"
          />
        </Form.Item>
        <Form.Item className="home-buttons">
          <Button htmlType="submit">
            Get
          </Button>
          <Button htmlType="submit">
            Sell
          </Button>
        </Form.Item>
      </Form>
    );
};

export default Home;
