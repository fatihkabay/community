type AddTodo = (newTodo: string) => void;

type Todo = {
  text: string;
  complete: boolean;
}

type ToggleComplete = (selectedTodo: Todo) => void;

type option = {
  value: string;
  onClick: () => void;
  color?: string;
}