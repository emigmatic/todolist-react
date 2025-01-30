import { useState } from "react"
import classes from "./styles.module.scss"
import {
	IoEllipsisHorizontal as MoreIcon,
	IoClose as CloseIcon,
} from "react-icons/io5"
import TodoMenu from "./TodoMenu"

function TodoItem({ todo, deleteTodo, toggleComplete }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen((oldState) => !oldState)
	}

	return (
		<div
			className={`${classes.todoItem} ${
				todo.completed ? classes.isCompleted : ""
			}`}
		>
			<div
				className={`${classes.todoItemContent} ${
					isOpen ? classes["is-open"] : ""
				}`}
			>
				<p>{todo.text}</p>
				<button onClick={toggle}>
					{isOpen ? (
						<CloseIcon aria-hidden="true" />
					) : (
						<MoreIcon aria-hidden="true" />
					)}
					<span className="assistive-text">
						{isOpen ? "Fermer" : "Ouvrir"} actions
					</span>
				</button>
			</div>
			<TodoMenu
				todo={todo}
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
				closeMenu={setIsOpen}
			/>
		</div>
	)
}

export default TodoItem
