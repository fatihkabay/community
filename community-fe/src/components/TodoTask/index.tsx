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
    <div className='content'>
      <span>Brand:{task.taskName}</span>
      <span>Kilometer:{task.deadline}</span>
    </div>
    <button onClick={()=>{
      completeTask(task.taskName);
    }}><DeleteOutlined /></button>
  </div>
  );
}

export default TodoTask;