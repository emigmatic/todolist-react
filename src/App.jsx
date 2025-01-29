import { TODOS } from "./Data"
import TodoList from "./TodoList"

function App() {
	return (
		<div className="container">
			<h1>Hello world</h1>
			<TodoList todos={TODOS} />
		</div>
	)
}

export default App
