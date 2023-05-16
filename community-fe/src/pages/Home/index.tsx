import React, { useEffect, useState, FC, ChangeEvent } from "react";
import { getCar, getUser, setCar } from "../../utils/helpers";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { Input, Form, Button, message } from "antd";
import { Rule } from "antd/es/form";
import CarService from "../../services/Car/CarService";
import { GetCarInputModel } from "../../services/Car/Models";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import Loading from "../../components/Loading";
import TodoTask from "../../components/TodoTask";
import { ITask } from "./interfaces";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
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
    { min: 4, max: 4 },
  ],
  kilometer: [
    { required: false },
    { pattern: new RegExp(/^([-]?[1-9][0-9]*|0)$/), warningOnly: true },
  ],
};

const Home: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadLine,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadLine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  const user = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1500);
    }
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const car = getCar();
    if (car != null) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  });

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
      message.success("Successfully purchase car");
    } catch (error) {
      message.error("Not Found");
      setLoading(false);
    }
  };
  const onFinishFailed = (error: ValidateErrorEntity<any>) => {
    console.error(error, message);
  };

  if (user == null) return <></>;

  return (
    <Form
      className="home-page"
      onFinish={onGetFinish}
      onFinishFailed={onFinishFailed}
    >
      {loading && <Loading />}
      <Form.Item name="Brand" rules={rules.brand} className="Brand">
        <Input
          onChange={handleChange}
          placeholder="Brand"
          type="text"
          name="task"
          value={task}
        />
      </Form.Item>
      <Form.Item name="Model" rules={rules.model} className="Model">
        <Input
          onChange={handleChange}
          placeholder="Model"
          type="text"
          name="task"
          value={task}
        />
      </Form.Item>
      <Form.Item name="Year" rules={rules.year} className="Year">
        <Input
          onChange={handleChange}
          placeholder="Year"
          type="text"
          name="deadline"
          value={deadLine}
        />
      </Form.Item>
      <Form.Item name="Kilometer" rules={rules.kilometer} className="Kilometer">
        <Input
          placeholder="Kilometer"
          type="text"
          name="deadline"
          value={deadLine}
        />
      </Form.Item>
      <div className="car-props-buttons">
        <Button onClick={addTask} htmlType="submit">
          <PlusOutlined style={{ color: "#2196F3" }} />
        </Button>
        <Button>
          <EditOutlined style={{ color: "#FFA000" }} />
        </Button>
        <Button>
          <DeleteOutlined style={{ color: "#E53935" }} />
        </Button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </Form>
  );
};
export default Home;
