import classes from "./styles.module.scss"
import {
	IoCheckmark as IconCheck,
	IoTrash as IconDelete,
} from "react-icons/io5"

function TodoMenu({ todo, deleteTodo, toggleComplete, closeMenu }) {
	const handleToggleComplete = () => {
		toggleComplete(todo.id)

		setTimeout(() => {
			closeMenu()
		}, 200)
	}

	return (
		<div className={classes.todoMenu}>
			<button
				className={`${classes.btn} ${classes.btnDelete}`}
				onClick={() => deleteTodo(todo.id)}
			>
				<IconDelete aria-hidden="true" />
				<span className="assistive-text">Supprimer</span>
			</button>
			<button
				className={`${classes.btn} ${classes.btnComplete} ${
					todo.completed ? classes.isActive : ""
				}`}
				onClick={handleToggleComplete}
			>
				<IconCheck aria-hidden="true" />
				<span className="assistive-text">Valider</span>
			</button>
		</div>
	)
}

export default TodoMenu
