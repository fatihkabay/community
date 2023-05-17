import { ITask } from '../../pages/Home/interfaces';
import { DeleteOutlined } from '@ant-design/icons';
import "./task.css"

interface Props{
  task:ITask;
  completeTask(taskNameToDelete:string):void;
}

const TodoTask= ({task, completeTask}:Props) => {
  return (
  <div className="task">
      <span><strong>Brand</strong>:{task.task}</span>
      <span><strong>Model</strong>:{task.taskName}</span>
      <span><strong>Year</strong>:{task.dead}</span>
      <span><strong>Kilometer</strong>:{task.deadLine}</span>
    <button onClick={()=>{
      completeTask(task.taskName);
    }}><DeleteOutlined /></button>
  </div>
  );
}

export default TodoTask;