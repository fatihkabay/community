import { useEffect } from "react";
import { getCar, getUser, setCar } from "../../utils/helpers";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Input, Form, Button, message } from "antd";
import { Rule } from "antd/es/form";
import { useState } from "react";
import CarService from "../../services/Car/CarService";
import { GetCarInputModel } from "../../services/Car/Models";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import Loading from "../../components/Loading";

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
      { pattern: new RegExp(/^[0-9]+$/), warningOnly: true },
      { min: 4, max:4, },
    ],
    kilometer: [
      { required: false },
      { pattern: new RegExp(/^([-]?[1-9][0-9]*|0)$/), warningOnly: true },
    ]
  };

const Home = () => {
  const user = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      setTimeout(() => {
       setLoading(false);
       navigate("/login");
      }, 1500)
    }
  }, );
 const [loading, setLoading] = useState(false);
    useEffect(() => {
      const car = getCar();
      if (car != null) {
     setTimeout(() => {
       setLoading(false);
      }, 1500)
   }
    })
    
    const onGetFinish = async (carsInfo: GetCarInputModel) => {
    setLoading(true);
    const newCar: GetCarInputModel = {
      Brand: carsInfo.Brand,
      Model: carsInfo.Model,
      Year: carsInfo.Year,
      Kilometer: carsInfo.Kilometer,
    };
  
  try {
    const res = await CarService.create(newCar);
    setCar(res);
    setLoading(false);
    message.success('Successfully purchase car');
  }
   catch (error) {
    message.error('Not Found');
    setLoading(false);
  }
}
const onUpdateFinish = async (carsInfo: GetCarInputModel) => {
  setLoading(true);
  const updateCar: GetCarInputModel = {
    Brand: carsInfo.Brand,
    Model: carsInfo.Model,
    Year: carsInfo.Year,
    Kilometer: carsInfo.Kilometer,
  };
  try {
    const res = await CarService.update(updateCar);
    setCar(res);
    setLoading(false);
    message.success("Successfully update car");
  }
  catch(error) {
    message.error("Failed to update vehicle information")
    setLoading(false);
  }
}

const onDeleteFinish = async (carsInfo: GetCarInputModel) => {
  setLoading(true);
  const deleteCar: GetCarInputModel = {
    Brand: carsInfo.Brand,
    Model: carsInfo.Model,
    Year: carsInfo.Year,
    Kilometer: carsInfo.Kilometer,
  };
  try {
    const res = await CarService.deleteCar(deleteCar);
    console.log("delete car:",res);
    setLoading(false);
    message.success("Successfully delete car");
  }
  catch(error) {
    message.error("Failed to delete vehicle information")
    setLoading(false);
  }
}
   const onFinishFailed = (error: ValidateErrorEntity<any>) => {
      console.error(error, message);
    }

   if (user == null) return <></>;

    return(
      <Form className="home-page"
          onFinish={onDeleteFinish}
          onFinishFailed={onFinishFailed}
      >
        {loading && <Loading />}
        <Form.Item name="Brand" rules={rules.brand} className="Brand">
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
            Delete
          </Button>
          <Button htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    )
  };
export default Home;
