import AddForm from "./components/AddForm"
import TodoList from "./components/TodoList"
import { v4 as uuidv4 } from "uuid"
import { TODOS } from "./Data"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
	const [todos, setTodos] = useLocalStorage(TODOS)

	const addNewTodo = (todoText) => {
		const newTodo = {
			id: uuidv4(),
			text: todoText,
			completed: false,
		}
		setTodos([newTodo, ...todos])
	}

	const deleteTodo = (todoId) => {
		const todosUpdate = todos.filter((todo) => todo.id !== todoId)
		setTodos(todosUpdate)
	}

	const toggleComplete = (id) => {
		const todosUpdate = todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		)
		setTodos(todosUpdate)
	}

	return (
		<div className="container">
			<h1>Hello world</h1>
			<TodoList
				todos={todos}
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
			/>
			<AddForm addNewTodo={addNewTodo} />
		</div>
	)
}

export default App
