
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {

  return (
    <li className={todo.complete? "todo-row completed" : "todo-row"}>
      <label>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  )
}