import { Input, Form, Button } from "antd";
import "./site.css";

function Site() {

  return (
    <Form 
    className="site-page">
      <Form.Item>
        <Button  htmlType="submit">Logout</Button>
        <Input />
        <Button htmlType="submit">Buying Car</Button>
        <Button htmlType="submit">Add to Basket</Button>
      </Form.Item>
    </Form>
    )
 }
 export default Site;