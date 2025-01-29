import { useState } from "react"
import classes from "./styles.module.scss"
import {
	IoEllipsisHorizontal as MoreIcon,
	IoClose as CloseIcon,
} from "react-icons/io5"
import TodoMenu from "./TodoMenu"

function TodoListItem({ todo }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen((oldState) => !oldState)
	}

	return (
		<div className={classes.todoItem}>
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
					<span>{isOpen ? "Fermer" : "Ouvrir"} actions</span>
				</button>
			</div>
			<TodoMenu />
		</div>
	)
}

export default TodoListItem
