import TodoItem from "./TodoItem"
import classes from "./styles.module.scss"

function TodoList({ todos, deleteTodo, toggleComplete }) {
	return (
		<div className={classes.todoList}>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<TodoItem
								todo={todo}
								deleteTodo={deleteTodo}
								toggleComplete={toggleComplete}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default TodoList
