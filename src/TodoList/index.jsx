import TodoListItem from "./TodoListItem"
import classes from "./styles.module.scss"

function TodoList({ todos }) {
	return (
		<div className={classes.todoList}>
			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<TodoListItem todo={todo} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default TodoList
