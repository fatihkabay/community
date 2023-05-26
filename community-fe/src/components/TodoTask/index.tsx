import { useState } from 'react';
import { ITask } from '../../pages/Home/interfaces';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Form, Button, message } from 'antd';
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import Loading from "../../components/Loading";
import { DeleteOutputModel } from '../../services/Car/Models';
import CarService from '../../services/Car/CarService';
import { clearStorage } from '../../utils/helpers';
import "./task.css"

interface Props{
  task:ITask;
  completeTask(taskNameToDelete:string):void;
}

const TodoTask= ({task, completeTask}:Props) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async (carsInfo: DeleteOutputModel) => {
    message.success("ewjgpng");
    setLoading(true);
    const deleteCar: DeleteOutputModel = {
      id: carsInfo.id,
    };
    try {
      await CarService.delete(deleteCar);
      clearStorage();
      message.success("Successfully Deleted");
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      message.error("Error deleting car:");
      setLoading(false);
    }
  };
  const onDeleteFailed = (error: ValidateErrorEntity<any>) => {
    console.error(error, message);
  };
  return (
    <Form
      className="home-page"
      onFinish={onDelete}
      onFinishFailed={onDeleteFailed}
    >
      {loading && <Loading />}
  <div className="task">
      <span><strong>Brand</strong>:{task.task}</span>
      <span><strong>Model</strong>:{task.taskName}</span>
      <span><strong>Year</strong>:{task.dead}</span>
      <span><strong>Kilometer</strong>:{task.deadLine}</span>
    <Button htmlType='submit' onClick={() => completeTask(task.taskName)}><DeleteOutlined /></Button>
    <Button><EditOutlined/></Button>
  </div>
  </Form>
  );
}

export default TodoTask;