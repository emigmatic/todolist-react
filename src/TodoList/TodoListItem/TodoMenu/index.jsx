import classes from "./styles.module.scss"
import {
	IoCheckmark as IconCheck,
	IoTrash as IconDelete,
} from "react-icons/io5"

function TodoMenu() {
	return (
		<div className={classes.todoMenu}>
			<button className={`${classes.btn} ${classes.btnComplete}`}>
				<IconCheck aria-hidden="true" />
				<span>Valider</span>
			</button>
			<button className={`${classes.btn} ${classes.btnDelete}`}>
				<IconDelete aria-hidden="true" />
				<span>Supprimer</span>
			</button>
		</div>
	)
}

export default TodoMenu
